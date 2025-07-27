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
          alt="Motorcycle Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          SAMURAI ABEL
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
          Taller Especializado en Motocicletas
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          Donde la pasión por las motos se encuentra con la maestría técnica. 
          Más de 10 años brindando el mejor servicio y mantenimiento para tu compañera de aventuras.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('servicios')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver Servicios
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Contactar Ahora
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-400" />
      </div>

      <a
        href="https://wa.me/1234567890"
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