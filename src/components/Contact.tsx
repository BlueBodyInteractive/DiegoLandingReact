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
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Información de Contacto</h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Dirección</h4>
                  <p>Av. Principal 123, Ciudad, País</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Teléfono</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p>info@tallerdemotos.com</p>
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
                href="https://wa.me/51981048628?text=Hola,%20vi%20tu%20página%20web%20y%20quiero%20llevar%20mi%20moto%20al%20taller.%20¿Podrías%20darme%20más%20información?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Ubicación en el Mapa</h3>
            <div className="overflow-hidden rounded-lg shadow-lg border border-red-600/30">
              <iframe
                title="Ubicación del taller"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.9089316057575!2d-77.026347!3d-12.1183833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c810a3bfa32b%3A0x1ea486f39beb9066!2sDesert%20Sport%20Racing%20S.A.C.!5e0!3m2!1ses-419!2spe!4v1753584438784!5m2!1ses-419!2spe"
                width="100%"
                height="400"
                loading="lazy"
                allowFullScreen
                className="w-full h-96 border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;