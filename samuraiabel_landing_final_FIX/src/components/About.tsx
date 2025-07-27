import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Nosotros
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Con más de una década de experiencia, somos el taller de confianza para miles de motociclistas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg"
              alt="About Us"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">La Historia de Samurai Abel</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Comenzamos como un pequeño taller familiar con una gran pasión por las motocicletas. 
              Hoy, somos reconocidos como uno de los mejores talleres especializados de la región.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Nuestro compromiso es brindar un servicio excepcional, utilizando las mejores herramientas 
              y repuestos originales para mantener tu moto en perfectas condiciones.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                <div className="text-gray-400">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">5000+</div>
                <div className="text-gray-400">Motos Reparadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
                <div className="text-gray-400">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-400">Soporte de Emergencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;