import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Necesitas ayuda con tu moto? Contáctanos y estaremos encantados de asistirte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Dirección</h4>
                  <p className="text-gray-400">Av. Principal 123, Ciudad, País</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-red-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Teléfono</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-red-400 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">info@samuraiabel.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-white">Horarios de Atención</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 4:00 PM</p>
                <p>Domingos: Cerrado</p>
                <p className="text-red-400 font-semibold">Emergencias 24/7 disponibles</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Ubicación</h3>
            <div className="bg-gray-900 rounded-lg p-8 border border-red-600/20 text-center">
              <MapPin className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-6">
                Haz clic en el mapa para abrir WhatsApp y obtener direcciones exactas a nuestro taller.
              </p>
              <a
                href="https://wa.me/1234567890?text=Hola,%20necesito%20direcciones%20al%20taller"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver Ubicación en WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;