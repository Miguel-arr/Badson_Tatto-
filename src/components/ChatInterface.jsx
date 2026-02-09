import React, { useState } from 'react';

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
          {/* ... Campos restantes del formulario (Tamaño, Zona, Idea) ... */}
           {/* Nota: He resumido para no hacerlo tan largo, copia el resto de los inputs igual que en tu original */}
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
        </form>
      </div>
    </div>
  );
};

export default BookingForm;