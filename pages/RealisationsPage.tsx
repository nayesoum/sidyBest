// pages/RealisationsPage.tsx
import React from 'react';
import ParallaxHero from '../components/ParallaxHero';
import RealisationCard from '../components/RealisationCard';
import BeforeAfterImageCard from '../components/BeforeAfterImageCard'; // New import
import { REALISATIONS, BEFORE_AFTER_GALLERY } from '../constants';
import { HairLength } from '../types';

const RealisationsPage: React.FC = () => {
  const hairLengths = Object.values(HairLength);

  return (
    <div className="pt-20 pb-16">
      <ParallaxHero
        imageSrc="https://picsum.photos/1920/1080?random=45" // Unique image for realizations page
        title="Mes Réalisations"
        subtitle="Découvrez notre portfolio, le reflet de notre passion et de notre expertise."
      />

      {/* Section: Galerie de Réalisations par Catégorie */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold text-center mb-12">Notre Portfolio Capillaire</h2>
        <p className="text-lg text-text-light text-center mb-12 max-w-3xl mx-auto">
          Explorez nos créations, des coupes les plus modernes aux colorations les plus éclatantes, classées par longueur de cheveux.
          Passez votre souris sur les images pour découvrir une autre perspective !
        </p>

        {hairLengths.map((length) => {
          const filteredRealisations = REALISATIONS.filter(realisation => realisation.category === length);
          if (filteredRealisations.length === 0) return null;

          return (
            <div key={length} className="mb-16">
              <h3 className="text-3xl font-serif font-bold text-secondary-orange-gold text-center mb-8 pb-4 border-b-2 border-border-subtle inline-block mx-auto">
                {length}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRealisations.map(realisation => (
                  <RealisationCard key={realisation.id} realisation={realisation} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Section: Transformations Avant / Après */}
      <section className="bg-text-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold mb-12">Transformations Avant / Après</h2>
          <p className="text-lg text-text-light text-center mb-12 max-w-3xl mx-auto">
            Voyez par vous-même la magie opérer ! Chaque transformation est le fruit de notre savoir-faire et de votre vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BEFORE_AFTER_GALLERY.map(image => (
              <BeforeAfterImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealisationsPage;