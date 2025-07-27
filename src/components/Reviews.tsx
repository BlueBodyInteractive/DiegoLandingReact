import React from 'react';
import { reviews } from '../data/reviews';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
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
  );
};

export default Reviews;