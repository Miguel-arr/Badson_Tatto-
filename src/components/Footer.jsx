import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

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

export default Footer;
