import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-red-600/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            TU TALLER DE CONFIANZA
          </h3>
          <p className="text-gray-400 mb-6">
            Expertos en cuidar y personalizar tu motocicleta.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/51981048628?text=Hola,%20vi%20tu%20página%20web%20y%20quiero%20llevar%20mi%20moto%20al%20taller.%20¿Podrías%20darme%20más%20información?"
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
              href="mailto:contacto@tutaller.com"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Tu Taller de Confianza. Todos los derechos reservados.</p>
            <p className="mt-2">
              Hecho con <span className="text-white">♥</span> por{" "}
              <a
                href="https://bluebody.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:underline"
              >
                BlueBody
              </a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;