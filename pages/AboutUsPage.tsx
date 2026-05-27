// pages/AboutUsPage.tsx
import React from 'react';

const teamMembers = [
  {
    name: 'Sophia Dubois',
    role: 'Fondatrice & Styliste Senior',
    bio: 'Avec plus de 15 ans d\'expérience, Sophia est la visionnaire derrière Éclat Cheveux. Sa passion pour l\'art capillaire et son engagement envers l\'excellence définissent l\'esprit du salon.',
    image: 'https://picsum.photos/400/400?random=4',
  },
  {
    name: 'Marc Lefevre',
    role: 'Spécialiste Couleur',
    bio: 'Marc est notre expert en coloration, capable de créer des teintes personnalisées qui subliment chaque carnation. Il est toujours à l\'affût des dernières tendances.',
    image: 'https://picsum.photos/400/400?random=5',
  },
  {
    name: 'Léa Bernard',
    role: 'Experte Soins Capillaires & Extensions',
    bio: 'Léa est dédiée à la santé de vos cheveux. Elle propose des diagnostics précis et des soins profonds revitalisants, ainsi que des poses d\'extensions impeccables.',
    image: 'https://picsum.photos/400/400?random=6',
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16"> {/* Add padding top to account for fixed Navbar */}
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 flex items-center justify-center text-center"
           style={{ backgroundImage: 'url(https://picsum.photos/1920/800?random=7)' }}>
        <div className="absolute inset-0 bg-primary-maroon opacity-60"></div>
        <h1 className="relative z-10 text-text-light text-5xl font-serif font-bold drop-shadow-lg">Qui Sommes-Nous</h1>
      </div>

      {/* History Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/800/600?random=8"
              alt="Intérieur du salon de coiffure"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold mb-6">Notre Histoire</h2>
            <p className="text-lg text-text-light leading-relaxed mb-4">
              Fondé en 2010 par Sophia Dubois, Éclat Cheveux est né d'une vision simple : créer un espace où chaque client
              se sente écouté, compris et sublimé. D'un petit salon de quartier, nous avons grandi pour devenir une référence
              en matière de coiffure moderne et de soins capillaires personnalisés.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Au fil des années, nous avons perfectionné nos techniques, exploré les dernières tendances et nous sommes entourés
              d'une équipe passionnée et hautement qualifiée. Notre engagement reste le même : offrir une expérience unique
              et des résultats qui dépassent vos attentes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Presentation */}
      <section className="bg-text-dark py-16 md:py-24 text-center">
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold mb-12">Notre Équipe Passionnée</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-primary-maroon rounded-lg shadow-xl p-8 transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-secondary-orange-gold shadow-md"
              />
              <h3 className="text-2xl font-serif font-semibold text-text-light mb-2">{member.name}</h3>
              <p className="text-secondary-orange-gold font-sans font-medium mb-4">{member.role}</p>
              <p className="text-mid-grey-text text-base leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy and Values */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold mb-12">Notre Philosophie et Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-text-dark shadow-md">
            <h3 className="text-2xl font-serif font-semibold text-secondary-orange-gold mb-3">Expertise</h3>
            <p className="text-text-light leading-relaxed">
              Nous nous engageons à maîtriser les techniques les plus récentes et à offrir des conseils d'experts pour la santé et le style de vos cheveux.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-text-dark shadow-md">
            <h3 className="text-2xl font-serif font-semibold text-secondary-orange-gold mb-3">Personnalisation</h3>
            <p className="text-text-light leading-relaxed">
              Chaque service est adapté à vos besoins uniques, votre morphologie et votre style de vie pour un résultat qui vous ressemble.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-text-dark shadow-md">
            <h3 className="text-2xl font-serif font-semibold text-secondary-orange-gold mb-3">Bien-être</h3>
            <p className="text-text-light leading-relaxed">
              Nous créons une atmosphère relaxante et accueillante où vous pouvez vous détendre et profiter d'un moment pour vous.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;