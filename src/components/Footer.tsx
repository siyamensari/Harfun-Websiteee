import React from 'react';
import { Instagram, Mail, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Harfun Studio</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              A vibrant art studio in Islamabad dedicated to nurturing creativity through workshops, 
              commissions, and handcrafted products. We believe art is for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/harfun.studio" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:harfun.studio@gmail.com" className="text-white/80 hover:text-yellow-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Workshops', 'Commissions', 'Products', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Visit Us</h4>
            <div className="flex items-start space-x-2 text-white/80">
              <MapPin className="w-5 h-5 mt-1 text-yellow-400" />
              <div>
                <p>Harfun Studio</p>
                <p>Street 3, Lakkwal</p>
                <p>Bani Gala, Jinnah Road</p>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for artists everywhere
            <span className="mx-2">•</span>
            © 2020 Harfun Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;