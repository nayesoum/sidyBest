// pages/ContactPage.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16"> {/* Add padding top to account for fixed Navbar */}
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 flex items-center justify-center text-center"
           style={{ backgroundImage: 'url(https://picsum.photos/1920/800?random=10)' }}>
        <div className="absolute inset-0 bg-primary-maroon opacity-60"></div>
        <h1 className="relative z-10 text-text-light text-5xl font-serif font-bold drop-shadow-lg">Nous Contacter</h1>
      </div>

      <section className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="bg-text-dark p-8 rounded-lg shadow-xl border border-primary-maroon">
          <h2 className="text-4xl font-serif font-bold text-text-light mb-8">Informations de Contact</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-semibold text-secondary-orange-gold mb-2">Téléphone</h3>
              <p className="text-text-light text-lg">{COMPANY_INFO.phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-secondary-orange-gold mb-2">Adresse</h3>
              <p className="text-text-light text-lg">{COMPANY_INFO.address}</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-secondary-orange-gold mb-2">Email</h3>
              <p className="text-text-light text-lg">{COMPANY_INFO.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-secondary-orange-gold mb-2">Horaires d'Ouverture</h3>
              <ul className="space-y-1 text-text-light text-lg">
                {Object.entries(COMPANY_INFO.hours).map(([day, hours]) => (
                  <li key={day}>
                    <span className="capitalize font-medium">{day}:</span> {hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;