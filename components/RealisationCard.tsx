// components/RealisationCard.tsx
import React, { useState } from 'react';
import { Realisation } from '../types';

interface RealisationCardProps {
  realisation: Realisation;
}

const RealisationCard: React.FC<RealisationCardProps> = ({ realisation }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-shadow duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Image */}
      <img
        src={realisation.defaultImageUrl}
        alt={realisation.description || 'Réalisation'}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* Hover Image */}
      <img
        src={realisation.hoverImageUrl}
        alt={realisation.description || 'Réalisation détaillée'}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-text-dark bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-text-light text-lg font-semibold font-serif leading-tight drop-shadow-md">
          {realisation.description || 'Cliquez pour voir les détails'}
        </p>
      </div>
    </div>
  );
};

export default RealisationCard;