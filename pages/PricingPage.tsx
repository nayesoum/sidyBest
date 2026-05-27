// pages/PricingPage.tsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';
import { ServiceCategory, HairLength, Service, CartItem } from '../types';

interface PricingPageProps {
  onAddToCart: (item: CartItem) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onAddToCart }) => {
  const categories = Object.values(ServiceCategory);
  const hairLengths = Object.values(HairLength);

  const getServicesByCategoryAndLength = (category: ServiceCategory, length: HairLength): Service | undefined => {
    return SERVICES.find(
      (service) => service.category === category && service.length === length
    );
  };

  return (
    <div className="pt-20 pb-16"> {/* Add padding top to account for fixed Navbar */}
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 flex items-center justify-center text-center"
           style={{ backgroundImage: 'url(https://picsum.photos/1920/800?random=9)' }}>
        <div className="absolute inset-0 bg-primary-maroon opacity-60"></div>
        <h1 className="relative z-10 text-text-light text-5xl font-serif font-bold drop-shadow-lg">Nos Tarifs & Services</h1>
      </div>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold text-center mb-12">Découvrez nos Prestations</h2>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h3 className="text-3xl font-serif font-bold text-secondary-orange-gold text-center mb-8 pb-4 border-b-2 border-border-subtle inline-block mx-auto">
              {category}
            </h3>
            <p className="text-center text-text-light text-lg mb-8 max-w-3xl mx-auto">
              {/* Short description for each category */}
              {category === ServiceCategory.WAVE && "Nos techniques de Wave pour des ondulations parfaites et durables."}
              {category === ServiceCategory.STS && "Le système STS pour un lissage professionnel et une chevelure soyeuse."}
              {category === ServiceCategory.SOINS_PROFONDS && "Des soins profonds personnalisés pour revitaliser et renforcer vos cheveux."}
              {category === ServiceCategory.COLORATION && "Experts en coloration, nous réalisons la teinte de vos rêves, avec brillance et tenue."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairLengths.map((length) => {
                const service = getServicesByCategoryAndLength(category, length);
                return service ? (
                  <ServiceCard key={service.detail.id} service={service} onAddToCart={onAddToCart} />
                ) : (
                  <div key={`${category}-${length}`} className="flex items-center justify-center p-6 bg-text-dark rounded-lg shadow-sm text-mid-grey-text border border-border-subtle">
                    <p>Service non disponible pour cette longueur.</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PricingPage;