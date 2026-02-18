const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true }, // \'client\' o \'admin\'
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  room: { type: String, required: true } // ID de la sala de chat
});

module.exports = mongoose.model('Message', messageSchema);