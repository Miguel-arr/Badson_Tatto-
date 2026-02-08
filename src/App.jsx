import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, Calendar, MessageSquare, Image as ImageIcon, 
  Send, Menu, X, ChevronRight, MapPin, Clock, ShieldCheck 
} from 'lucide-react';

// --- MOCK DATA (Simulando Base de Datos) ---
const PORTFOLIO_ITEMS = [
  
  { id: 1, src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800", category: "Realismo" },
  { id: 2, src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800", category: "Blackwork" },
  { id: 3, src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80&w=800", category: "Tradicional" },
  { id: 4, src: "https://images.unsplash.com/photo-1590246130793-2e1f5cd801c6?auto=format&fit=crop&q=80&w=800", category: "Letras" },
  { id: 5, src: "https://images.unsplash.com/photo-1560707303-4e9803d1c527?auto=format&fit=crop&q=80&w=800", category: "Japonés" },
  { id: 6, src: "https://images.unsplash.com/photo-1596699298319-7d0571b78280?auto=format&fit=crop&q=80&w=800", category: "Minimalista" },
];

const REVIEWS = [
  { id: 1, name: "Carlos M.", text: "La línea es perfecta. Badson tiene una mano increíblemente ligera.", stars: 5 },
  { id: 2, name: "Ana R.", text: "El estudio es super limpio y el diseño quedó mejor de lo que imaginé.", stars: 5 },
];

// --- COMPONENTES ---

const Navbar = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => setActiveTab('home')}>
          <h1 className="text-2xl font-bold tracking-tighter text-white">
            BADSON<span className="text-yellow-500">.TATTOO</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {['Home', 'Portafolio', 'Citas', 'Chat', 'Cuidados'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`${activeTab === item.toLowerCase() ? 'text-yellow-500' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400 hover:text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'Portafolio', 'Citas', 'Chat', 'Cuidados'].map((item) => (
            <button
              key={item}
              onClick={() => { setActiveTab(item.toLowerCase()); setMobileMenuOpen(false); }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const Hero = ({ setActiveTab }) => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1920" 
        alt="Tattoo Background" 
        className="w-full h-full object-cover opacity-30 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="text-yellow-500 font-medium tracking-[0.2em] mb-4 animate-fade-in-up">EST. 2019</p>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
        Ink Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Soul</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Especialista en Realismo y Blackwork. Transformando ideas en arte permanente en la piel.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => setActiveTab('citas')}
          className="bg-yellow-500 text-black px-8 py-4 rounded-none font-bold hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
        >
          <Calendar size={20} /> AGENDAR CITA
        </button>
        <button 
          onClick={() => setActiveTab('portafolio')}
          className="border border-white/20 text-white px-8 py-4 rounded-none font-bold hover:bg-white/10 transition-all"
        >
          VER TRABAJOS
        </button>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">Últimos Trabajos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PORTFOLIO_ITEMS.map((item) => (
        <div key={item.id} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">
          <img 
            src={item.src} 
            alt={item.category} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div>
              <p className="text-yellow-500 text-sm font-bold tracking-wider">{item.category}</p>
              <p className="text-white text-lg font-medium">Ver detalles</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', idea: '', size: '', placement: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Solicitud enviada! Badson te contactará pronto.');
    // Aquí conectarías con Firebase o enviarías a WhatsApp API
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto">
      <div className="bg-zinc-900 p-8 md:p-12 border border-zinc-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Cotiza tu Tatuaje</h2>
        <p className="text-gray-400 mb-8">Cuéntame tu idea. Entre más detalles, mejor.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
              <input 
                type="text" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                required
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp</label>
              <input 
                type="tel" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                required
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Tamaño Aprox (cm)</label>
              <input 
                type="text" 
                placeholder="Ej: 10x15 cm"
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                onChange={e => setFormData({...formData, size: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Zona del Cuerpo</label>
              <input 
                type="text" 
                placeholder="Ej: Antebrazo interno"
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                onChange={e => setFormData({...formData, placement: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Describe tu idea</label>
            <textarea 
              rows="4"
              className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="¿Qué te quieres tatuar? ¿Estilo? ¿Blanco y negro o color?"
              required
              onChange={e => setFormData({...formData, idea: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-4 hover:bg-yellow-400 transition-colors"
          >
            ENVIAR SOLICITUD
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            * Se requiere un depósito para agendar la cita final.
          </p>
        </form>
      </div>
    </div>
  );
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hola, bienvenido a Badson Tattoo. ¿Tienes alguna duda sobre tu diseño o el proceso?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
    setInput("");
    // Simulamos respuesta
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Gracias por escribir. Badson está tatuando ahora, te responderá en breve.", sender: "bot" }]);
    }, 1000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fakeUrl = URL.createObjectURL(file);
      setMessages([...messages, { id: Date.now(), image: fakeUrl, sender: "user" }]);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-2xl mx-auto h-screen flex flex-col">
       <div className="bg-zinc-900 border border-zinc-800 flex-1 flex flex-col rounded-lg overflow-hidden">
         {/* Chat Header */}
         <div className="bg-zinc-950 p-4 border-b border-zinc-800 flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">B</div>
           <div>
             <h3 className="text-white font-bold">Chat Directo</h3>
             <p className="text-xs text-green-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 block"></span> En línea</p>
           </div>
         </div>

         {/* Messages Area */}
         <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
           {messages.map(msg => (
             <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`max-w-[80%] rounded-lg p-3 ${
                 msg.sender === 'user' ? 'bg-yellow-500 text-black' : 'bg-zinc-800 text-gray-200'
               }`}>
                 {msg.text && <p>{msg.text}</p>}
                 {msg.image && <img src={msg.image} alt="upload" className="rounded mt-2 max-w-full h-auto border border-black/10" />}
                 <span className="text-[10px] opacity-50 block text-right mt-1">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
               </div>
             </div>
           ))}
         </div>

         {/* Input Area */}
         <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex gap-2">
           <button 
             onClick={() => fileInputRef.current.click()}
             className="text-gray-400 hover:text-yellow-500 p-2"
           >
             <ImageIcon size={24} />
           </button>
           <input 
             type="file" 
             ref={fileInputRef} 
             className="hidden" 
             accept="image/*"
             onChange={handleImageUpload}
           />
           <input 
             type="text" 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyPress={(e) => e.key === 'Enter' && handleSend()}
             placeholder="Escribe un mensaje..."
             className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-4 text-white focus:outline-none focus:border-yellow-500"
           />
           <button 
             onClick={handleSend}
             className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-400"
           >
             <Send size={20} />
           </button>
         </div>
       </div>
    </div>
  );
};

const Aftercare = () => (
  <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">Cuidados del Tatuaje</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
        <ShieldCheck className="text-yellow-500 mb-4" size={40} />
        <h3 className="text-xl font-bold mb-4">Primeros 3 días</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Mantén el parche dermor protector por 24-48 horas.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Lava con agua tibia y jabón neutro.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Seca con toallas de papel a toques, no frotes.</li>
        </ul>
      </div>
      <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
        <Clock className="text-yellow-500 mb-4" size={40} />
        <h3 className="text-xl font-bold mb-4">Semanas 1-2</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Aplica crema hidratante especial capa fina 3 veces al día.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> No rasques ni arranques las costras.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Evita piscinas, mar y sol directo.</li>
        </ul>
      </div>
    </div>
  </div>
);

// --- APP MAIN ---

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Footer Component
  const Footer = () => (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="text-gray-400 hover:text-yellow-500"><Instagram size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-yellow-500"><MapPin size={24} /></a>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Badson Tattoo. Todos los derechos reservados.</p>
      <p className="text-gray-600 text-xs mt-2">Diseñado por Ing. de Sistemas</p>
    </footer>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      <main className="min-h-screen">
        {activeTab === 'home' && <Hero setActiveTab={setActiveTab} />}
        {activeTab === 'portafolio' && <Portfolio />}
        {activeTab === 'citas' && <BookingForm />}
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'cuidados' && <Aftercare />}
      </main>

      {activeTab !== 'chat' && <Footer />}
    </div>
  );
}

export default App;