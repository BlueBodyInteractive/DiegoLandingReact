import React from 'react';
import { products } from '../data/products';

const Products = () => {
  return (
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
  );
};

export default Products;