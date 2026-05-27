// components/ServiceCard.tsx
import React from 'react';
import { Service, CartItem } from '../types';

interface ServiceCardProps {
  service: Service;
  onAddToCart: (item: CartItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ service: service, quantity: 1 });
  };

  return (
    <div className="bg-text-dark rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-border-subtle">
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold text-text-light mb-2">
          {service.detail.name}
        </h3>
        <p className="text-mid-grey-text mb-4 text-sm">{service.detail.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-secondary-orange-gold">
            {service.detail.price}€
          </span>
          <span className="text-mid-grey-text text-sm">
            Temps estimé: {service.detail.time}h
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-btn-background-dark text-btn-text-light font-semibold py-3 px-6 rounded-lg hover:bg-secondary-orange-gold hover:text-text-dark transition duration-300 ease-in-out flex items-center justify-center text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;