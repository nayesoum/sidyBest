// components/BeforeAfterImageCard.tsx
import React, { useState } from 'react';
import { BeforeAfterImage } from '../types';

interface BeforeAfterImageCardProps {
  image: BeforeAfterImage;
}

const BeforeAfterImageCard: React.FC<BeforeAfterImageCardProps> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-shadow duration-300 ease-in-out transform hover:scale-105 border border-border-subtle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Transformation Avant/Après: ${image.description}`}
    >
      {/* Image Avant */}
      <img
        src={image.beforeImageUrl}
        alt={`Avant - ${image.description || ''}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay "Avant" text */}
      <div className="absolute inset-0 flex items-center justify-center bg-primary-maroon bg-opacity-40 z-10">
        <p className="text-text-light text-3xl font-serif font-bold drop-shadow-lg">AVANT</p>
      </div>

      {/* Image Après (initially blurred, unblurs on hover) */}
      <img
        src={image.afterImageUrl}
        alt={`Après - ${image.description || ''}`}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                    ${isHovered ? 'filter-none' : 'filter blur-lg'}`}
      />

      {/* Overlay "Après" text (appears on hover) */}
      <div className={`absolute inset-0 flex items-center justify-center bg-text-dark bg-opacity-50 z-20 transition-opacity duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-secondary-orange-gold text-3xl font-serif font-bold drop-shadow-lg">APRÈS</p>
      </div>

      {image.description && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-text-dark bg-opacity-70 text-center text-text-light text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p>{image.description}</p>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterImageCard;