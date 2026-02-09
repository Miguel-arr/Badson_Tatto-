import React from 'react';
import { Calendar } from 'lucide-react';

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

export default Hero;