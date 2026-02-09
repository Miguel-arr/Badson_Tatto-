import React from 'react';
import { ShieldCheck, Clock, ChevronRight } from 'lucide-react';

const Aftercare = () => (
  <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-8 text-center">Cuidados del Tatuaje</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
        <ShieldCheck className="text-yellow-500 mb-4" size={40} />
        <h3 className="text-xl font-bold mb-4">Primeros 3 días</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Mantén el parche protector por 24-48 horas.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Lava con agua tibia y jabón neutro.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Seca con toallas de papel a toques, no frotes.</li>
        </ul>
      </div>
      <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
        <Clock className="text-yellow-500 mb-4" size={40} />
        <h3 className="text-xl font-bold mb-4">Semanas 1-2</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Aplica crema hidratante capa fina 3 veces al día.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> No rasques ni arranques las costras.</li>
          <li className="flex gap-2"><ChevronRight size={16} className="text-yellow-500 mt-1" /> Evita piscinas, mar y sol directo.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Aftercare;