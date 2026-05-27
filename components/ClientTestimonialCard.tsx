// components/ClientTestimonialCard.tsx
import React from 'react';
import { ClientTestimonial } from '../types';

interface ClientTestimonialCardProps {
  testimonial: ClientTestimonial;
}

const ClientTestimonialCard: React.FC<ClientTestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <img
        src={testimonial.imageUrl}
        alt={`Client ${testimonial.name}`}
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-text-dark via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-text-light text-center">
        <p className="text-xl font-serif font-bold drop-shadow-md">{testimonial.name}</p>
      </div>
    </div>
  );
};

export default ClientTestimonialCard;