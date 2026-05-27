// components/ParallaxHero.tsx
import React from 'react';

interface ParallaxHeroProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-primary-maroon opacity-50"></div> {/* Overlay for text readability */}
      <div className="relative z-10 text-text-light p-6 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl font-sans font-light max-w-2xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ParallaxHero;