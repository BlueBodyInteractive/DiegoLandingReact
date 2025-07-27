import React from 'react';
import { services } from '../data/services';
import { brands } from '../data/brands';
import { Wrench, Shield, Award, Calendar } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  wrench: <Wrench className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  calendar: <Calendar className="w-8 h-8" />
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios especializados para mantener tu moto en perfectas condiciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-red-600/20"
            >
              <div className="text-red-400 mb-4">{iconMap[service.icon]}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="text-red-400 font-bold text-lg">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Marcas que Respaldamos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="text-red-400 font-bold">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;