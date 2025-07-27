import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Wrench, 
  Users, 
  Camera, 
  MessageCircle,
  ChevronDown,
  Shield,
  Award,
  Calendar,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'servicios', 'productos', 'blog', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mantenimiento Completo",
      description: "Servicio integral de mantenimiento preventivo y correctivo para tu motocicleta",
      price: "Desde $150"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reparación de Motor",
      description: "Diagnóstico y reparación especializada de motores de todas las marcas",
      price: "Desde $300"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Personalización",
      description: "Modifica y personaliza tu moto con los mejores accesorios y repuestos",
      price: "Consultar"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Mantenimiento Periódico",
      description: "Programa de mantenimiento preventivo cada 3, 6 y 12 meses",
      price: "Plan desde $80"
    }
  ];

  const products = [
    {
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
      title: "Cascos Premium",
      description: "Cascos de alta gama con certificación DOT y ECE",
      price: "$180 - $450"
    },
    {
      image: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg",
      title: "Repuestos Originales",
      description: "Repuestos originales para todas las marcas principales",
      price: "Precio variable"
    },
    {
      image: "https://images.pexels.com/photos/1191684/pexels-photo-1191684.jpeg",
      title: "Accesorios",
      description: "Guantes, chaquetas, botas y más accesorios de seguridad",
      price: "$25 - $300"
    },
    {
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
      title: "Lubricantes",
      description: "Aceites y lubricantes de las mejores marcas del mercado",
      price: "$15 - $80"
    }
  ];

  const blogPosts = [
    {
      image: "https://scontent-mia3-1.cdninstagram.com/v/t51.29350-15/467513089_1088386999651088_8504477779123456789_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=abc123&_nc_ht=scontent-mia3-1.cdninstagram.com&oh=00_abc123&oe=abc123",
      title: "Aventura Épica: Ruta de los Volcanes",
      description: "Samurai Abel conquista las carreteras más desafiantes en su última expedición motera",
      date: "20 Dic 2024",
      type: "video"
    },
    {
      image: "https://scontent-mia3-2.cdninstagram.com/v/t51.29350-15/467234567_987654321098765_1234567890123456_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=def456&_nc_ht=scontent-mia3-2.cdninstagram.com&oh=00_def456&oe=def456",
      title: "Taller en Acción: Restauración Completa",
      description: "Proceso completo de restauración de una Yamaha clásica en nuestro taller",
      date: "18 Dic 2024",
      type: "carousel"
    },
    {
      image: "https://scontent-mia3-1.cdninstagram.com/v/t51.29350-15/466789012_345678901234567_8901234567890123_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ghi789&_nc_ht=scontent-mia3-1.cdninstagram.com&oh=00_ghi789&oe=ghi789",
      title: "Encuentro Motero: Hermandad sobre Ruedas",
      description: "Los mejores momentos del último encuentro de motociclistas organizado por Samurai Abel",
      date: "15 Dic 2024",
      type: "photo"
    },
    {
      image: "https://scontent-mia3-2.cdninstagram.com/v/t51.29350-15/465432109_876543210987654_3210987654321098_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=jkl012&_nc_ht=scontent-mia3-2.cdninstagram.com&oh=00_jkl012&oe=jkl012",
      title: "Ruta Nocturna: Luces en la Carretera",
      description: "Aventura nocturna por las carreteras más espectaculares, capturando la magia de rodar bajo las estrellas",
      date: "12 Dic 2024",
      type: "video"
    },
    {
      image: "https://scontent-mia3-1.cdninstagram.com/v/t51.29350-15/464567890_123456789012345_6789012345678901_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=mno345&_nc_ht=scontent-mia3-1.cdninstagram.com&oh=00_mno345&oe=mno345",
      title: "Customización Extrema: Proyecto Especial",
      description: "Transformación completa de una Harley Davidson en una obra de arte sobre ruedas",
      date: "10 Dic 2024",
      type: "carousel"
    },
    {
      image: "https://scontent-mia3-2.cdninstagram.com/v/t51.29350-15/463210987_654321098765432_1098765432109876_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=pqr678&_nc_ht=scontent-mia3-2.cdninstagram.com&oh=00_pqr678&oe=pqr678",
      title: "Ruta del Amanecer: Kilómetros de Libertad",
      description: "Salida matutina capturando los primeros rayos del sol en una ruta inolvidable",
      date: "8 Dic 2024",
      type: "photo"
    }
  ];

  const reviews = [
    {
      name: "Carlos Mendoza",
      rating: 5,
      comment: "Excelente servicio! Mi Yamaha quedó como nueva. Abel es un verdadero maestro en mecánica.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "María Rodríguez",
      rating: 5,
      comment: "El mejor taller de la ciudad. Atención personalizada y precios justos. 100% recomendado.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "José Pérez",
      rating: 5,
      comment: "Llevo mi Honda aquí desde hace 3 años. Siempre un trabajo impecable y a tiempo.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];

  const brands = [
    "Honda", "Yamaha", "Kawasaki", "Suzuki", "Ducati", "BMW", "KTM", "Harley Davidson"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                SAMURAI ABEL
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['inicio', 'nosotros', 'servicios', 'productos', 'blog', 'contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-red-400 border-b-2 border-red-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['inicio', 'nosotros', 'servicios', 'productos', 'blog', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
      </section>

      {/* About Section */}
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

      {/* Services Section */}
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
                <div className="text-red-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-red-400 font-bold text-lg">{service.price}</div>
              </div>
            ))}
          </div>

          {/* Brands Section */}
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

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Catálogo de Productos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Los mejores productos y accesorios para tu motocicleta, con la garantía de calidad que nos caracteriza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-red-600/20"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 font-bold text-lg">{product.price}</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-300">
                      Ver Más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Aventuras Moteras
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sigue nuestras aventuras, rutas épicas y consejos para mantener tu moto en las mejores condiciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-red-600/20 relative"
              >
                {/* Content Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  {post.type === 'video' && (
                    <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <Camera className="w-3 h-3 mr-1" />
                      VIDEO
                    </div>
                  )}
                  {post.type === 'carousel' && (
                    <div className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      GALERÍA
                    </div>
                  )}
                  {post.type === 'photo' && (
                    <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <Camera className="w-3 h-3 mr-1" />
                      FOTO
                    </div>
                  )}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="text-red-400 text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <button className="flex items-center text-red-400 hover:text-red-300 transition-colors duration-300">
                    Leer Más <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Ver Más Posts Button */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/samurai.abel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="w-5 h-5 mr-2" />
              Ver Todas las Aventuras en Instagram
            </a>
          </div>
          
          {/* Instagram Feed Preview */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Galería de Aventuras</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/samurai.abel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={post.image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  {/* Content Type Indicator */}
                  <div className="absolute top-2 right-2">
                    {post.type === 'video' && (
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-1"></div>
                      </div>
                    )}
                    {post.type === 'carousel' && (
                      <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-[1px]">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Reseñas de Clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Lo que dicen nuestros clientes sobre nuestro trabajo y dedicación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-red-600/20 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
}

export default App;