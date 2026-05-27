// pages/HomePage.tsx
import React from 'react';
import ParallaxHero from '../components/ParallaxHero';
import ClientTestimonialCard from '../components/ClientTestimonialCard';
import { CLIENT_TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <main>
      <ParallaxHero
        imageSrc="https://picsum.photos/1920/1080?random=1"
        title="B THE BEST "
        subtitle="Sublimez votre beauté capillaire avec expertise et passion."
      />

      <section className="container mx-auto px-4 py-16 md:py-24 text-center">{/* General Presentation Section */}
        <h2 className="text-4xl font-serif font-bold text-secondary-orange-gold mb-6"> Avec B THE BEST vous etes</h2>
        <p className="text-lg md:text-xl text-text-light max-w-4xl mx-auto leading-relaxed">
          <strong style={{ fontSize: "25px" }}>Unique!</strong><br></br> Rendre chaque femme unique. Sidy réalise chaque jour le rêve de ses clientes... Depuis l'adolescence à Sainte- Lucie, son île natale, Sidy  a fait du cheveu sa matière favorite, de la structure parfaite et du mouvement naturel sa spécialité. 
Une fois diplômée, elle travaille dans plusieurs salons, en Martinique, puis en Metroplole où en 2009, elle se met à son compte. Sandrine Davidas loue dans son salon, DS création, des fauteuils pour les coiffeurs Indépendant. Un concept inédit à Paris, alors. Une formule qu'elle répondra, 4 ans plus tard en ouvrant B The Best.
Un salon de référence à l'atmosphère conviviale auquel de nombreuses personnalités sont fidèles: la comédienne Claudia TAGBo, la journaliste Kareen GUIOCK-THURAM, le journaliste Pascal PATRICE, la chanteuse MILCA, des joueuses de l'équipe de France de Handball...
        </p>
      </section>

      <section className="bg-text-dark py-16 md:py-24">{/* Informative Text Section */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-serif font-bold text-secondary-orange-gold mb-6">Le cheveu Crépu</h3>
            <p className="text-text-light text-lg leading-relaxed mb-4">
 c'est un cheveu sec et fragile qui nécessite une hydratation quotidienne et un soin régulier. Appliquer de la vaseline régulièrement est un piège à éviter. Cela étouffe le cheveu.
Bouclés/ frisés : a détailler 
Lisse: a détailler 
            </p>
            
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-secondary-orange-gold mb-6"> Conseils + listes de produits recommandés </h3>
            <p className="text-text-light text-lg leading-relaxed">
             Le surplus de gras; C'est l’erreur que je constate le plus souvent.
Car bon nombre de femmes penses qu'il est bon de surabonder le cheveux de gras alors que c'est tout l’inverse.
Nous avons une production naturelle de sébum dans le follicule pileux, et cela suffit amplement, sinon c'est tout le contraire. 

            </p>
          </div>
        </div>
      </section>

<section className="relative py-16 md:py-24" aria-label="Image représentant notre salon">
         <div 
           className="absolute inset-0 bg-cover bg-center" 
           style={{
             backgroundImage: 'url(https://picsum.photos/1920/800?random=3)',
             filter: 'blur(8px)'
           }}
         />
         <div className="relative container mx-auto px-4 text-center">
           <h3 className="text-4xl font-serif font-bold text-text-light mb-4 drop-shadow-md">Hair faux pas!</h3>
           <p className="text-xl text-text-light max-w-3xl mx-auto drop-shadow-sm">
            <br /> 
            les tissages à répétition <br />
            les défrisages à la maison <br /> 
            les tresses couchées à répétition<br />
           </p>
         </div>
       </section>

      <section aria-labelledby="testimonials-heading" className="container mx-auto px-4 py-16 md:py-24 text-center">{/* Testimonials Section - aria-labelledby improves screen reader navigation */}
        <h2 id="testimonials-heading" className="text-4xl font-serif font-bold text-secondary-orange-gold mb-12">Ils sont Passés Chez Nous</h2>
        <p className="text-lg md:text-xl text-text-light max-w-4xl mx-auto leading-relaxed mb-12">
          La satisfaction de nos clients est notre plus belle récompense. Découvrez quelques-uns de leurs sourires après un passage chez Éclat Cheveux.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {CLIENT_TESTIMONIALS.map(testimonial => (
            <ClientTestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;