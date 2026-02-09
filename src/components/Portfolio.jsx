import React from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';

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

export default Portfolio;