require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

// Importar modelos y rutas
const Quote = require('./models/Quote');
const Message = require('./models/Message');
const quoteRoutes = require('./routes/quotes');

// Rutas
app.use('/api/quotes', quoteRoutes);

app.get('/', (req, res) => {
  res.send('Badson Tattoo Backend API');
});

// Socket.io
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`Usuario ${socket.id} unido a la sala: ${room}`);
  });

  socket.on('send_message', async (data) => {
    try {
      const { room, text, sender } = data;
      const newMessage = new Message({ room, text, sender });
      await newMessage.save();

      io.to(room).emit('receive_message', newMessage);
    } catch (err) {
      console.error('Error al guardar mensaje:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
