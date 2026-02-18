import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => {
  const menuItems = ['Home', 'Portafolio', 'Citas', 'Chat', 'Cuidados'];

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg">
        <div className="flex items-center justify-between h-20 bg">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setActiveTab('home')}>
            <h1 className="text-2xl font-bold tracking-tighter text-white">
              BADSON<span className="text-red-700">.TATTOO</span>
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`${activeTab === item.toLowerCase() ? 'text-shadow-red-700' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400 hover:text-white p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
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
};

export default Navbar;