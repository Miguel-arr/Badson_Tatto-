import React, { useState } from 'react';
// Importamos los componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import BookingForm from './components/BookingForm';
import ChatInterface from './components/ChatInterface';
import Aftercare from './components/Aftercare';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

 
      <main className="pt-20 min-h-screen bg-zinc-950 text-white">
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