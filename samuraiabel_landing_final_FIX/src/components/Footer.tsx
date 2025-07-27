import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-red-600/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            SAMURAI ABEL
          </h3>
          <p className="text-gray-400 mb-6">
            Tu taller de confianza para mantener viva la pasión por las motos.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="tel:+1234567890"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@samuraiabel.com"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2024 Samurai Abel. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;