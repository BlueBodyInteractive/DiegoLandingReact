import React from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg"
          alt="Taller de Motocicletas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          TU TALLER DE CONFIANZA
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
          Especialistas en mantenimiento, reparación y personalización de motocicletas
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          Más de una década brindando un servicio profesional y personalizado para motociclistas exigentes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('servicios')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver Servicios
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Contáctanos
          </button>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-400" />
      </div>

      <a
        href="https://wa.me/51981048628?text=Hola,%20vi%20tu%20página%20web%20y%20quiero%20llevar%20mi%20moto%20al%20taller.%20¿Podrías%20darme%20más%20información?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;