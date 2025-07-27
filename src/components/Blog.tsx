import React from 'react';
import { blogPosts } from '../data/blogPosts';
import { Camera, Users, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
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
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-red-600/20 relative"
            >
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
                className="w-full h-48 object-cover"
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
      </div>
    </section>
  );
};

export default Blog;