// pages/MarriagePage.tsx
import React from 'react';
import ParallaxHero from '../components/ParallaxHero';

const MarriagePage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <ParallaxHero
        imageSrc="https://images.pexels.com/photos/28849068/pexels-photo-28849068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Coiffure de Mariage"
        subtitle="Des sublimes coiffures pour votre grand jour : cheveux naturels, postiches et extensions."
      />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold text-center mb-12">
          Votre Look de Mariée
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <img
              src="https://images.pexels.com/photos/35129507/pexels-photo-35129507.jpeg?auto=compress&cs=tinysrgb&h=350"
              alt="Coiffure mariage cheveux naturels"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-secondary-orange-gold">
              Cheveux Naturels
            </h3>
            <p className="text-text-light text-lg leading-relaxed">
              Pour celles qui souhaitent mettre en valeur leur beauté naturelle,
              nous créons des coiffures de mariage élégantes et intemporelles
              qui subliment vos cheveux tout en respectant leur texture et
              leur santé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-text-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold text-center mb-12">
            Options de Postiche et Extensions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Postiche */}
            <div className="bg-text-light rounded-lg shadow-lg p-4 text-center">
              <img
                src="https://images.pexels.com/photos/17350753/pexels-photo-17350753.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Postiche mariage"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-serif font-bold text-text-light mb-2">
                Postiche
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                Parfait pour ajouter du volume ou changer de style sans
                altérer vos cheveux naturels. Disponible dans diverses
                textures et couleurs pour un rendu indétectable.
              </p>
            </div>
            {/* Extensions */}
            <div className="bg-text-light rounded-lg shadow-lg p-4 text-center">
              <img
                src="https://images.pexels.com/photos/8578924/pexels-photo-8578924.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Extensions mariage"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-serif font-bold text-text-light mb-2">
                Extensions
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                Allongez vos cheveux ou apportez du volume supplémentaire
                avec nos extensions de qualité supérieure, posées avec soin
                pour un résultat naturel et durable.
              </p>
            </div>
            {/* Accessoires */}
            <div className="bg-text-light rounded-lg shadow-lg p-4 text-center">
              <img
                src="https://images.pexels.com/photos/31141639/pexels-photo-31141639.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Accessoires mariage"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-serif font-bold text-text-light mb-2">
                Accessoires
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                Couronnes, peignes, voile et autres accessoires pour parfaire
                votre coiffure de mariage et ajouter une touche de glamour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold mb-8">
          Réservez votre essai coiffure
        </h2>
        <p className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
          Prenez rendez-vous pour un essai personnalisé afin de déterminer
          le style qui vous correspond le mieux. Nous vous accompagnons
          tout au long du processus pour que votre coiffure de mariage soit
          parfaite.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-btn-background-dark text-btn-text-light font-semibold py-3 px-8 rounded-lg hover:bg-secondary-orange-gold hover:text-text-dark transition duration-300 ease-in-out text-lg"
        >
          Nous Contacter
        </a>
      </section>
    </div>
  );
};

export default MarriagePage;