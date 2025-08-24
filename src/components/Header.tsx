import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'workshops', label: 'Workshops' },
    { id: 'commissions', label: 'Commissions' },
    { id: 'products', label: 'Products' },
    { id: 'internship', label: 'Internship' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    const element = document.getElementById(pageId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="/brand/logo-02.png" 
              alt="Harfun Studio Logo" 
              className="h-8 w-auto group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-out hover:shadow-lg"
            />
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium transition-all duration-300 hover:text-red-500 hover:scale-105 text-gray-700"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Scroll Navigation Hint */}
          <div className="hidden lg:flex items-center space-x-2 text-xs text-gray-500">
            <div className="w-3 h-3 border border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
            </div>
            <span>Scroll to navigate</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 hover:text-red-500 text-gray-700"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;