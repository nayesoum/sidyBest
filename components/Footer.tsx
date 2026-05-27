// components/Footer.tsx
import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { NavbarLink } from '../types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-text-dark text-text-light py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Salon Info */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 text-secondary-orange-gold">Éclat Cheveux</h3>
          <p className="text-text-light mb-2">{COMPANY_INFO.address}</p>
          <p className="text-text-light mb-2">Téléphone: {COMPANY_INFO.phone}</p>
          <p className="text-text-light mb-2">Email: {COMPANY_INFO.email}</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 text-secondary-orange-gold">Navigation</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link: NavbarLink) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className="text-text-light hover:text-secondary-orange-gold transition duration-300 ease-in-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours & Socials */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 text-secondary-orange-gold">Horaires d'ouverture</h3>
          <ul className="space-y-1 text-text-light mb-6">
            {Object.entries(COMPANY_INFO.hours).map(([day, hours]) => (
              <li key={day}>
                <span className="capitalize">{day}:</span> {hours}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-serif font-semibold mb-4 text-secondary-orange-gold">Suivez-nous</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="text-text-light hover:text-secondary-orange-gold transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2c-2.6 0-4.8 2.1-4.8 4.8v10.4c0 2.6 2.1 4.8 4.8 4.8h8.4c2.6 0 4.8-2.1 4.8-4.8V6.8c0-2.6-2.1-4.8-4.8-4.8H7.8zm1.5 0h8.4c1.8 0 3.3 1.5 3.3 3.3v10.4c0 1.8-1.5 3.3-3.3 3.3H7.8c-1.8 0-3.3-1.5-3.3-3.3V6.8c0-1.8 1.5-3.3 3.3-3.3zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 1.5c2 0 3.5 1.6 3.5 3.5S14 15.5 12 15.5 8.5 13.9 8.5 12 10 8.5 12 8.5zm5-5c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3-.6-1.3-1.3-1.3z"/>
              </svg>
            </a>
            <a href={COMPANY_INFO.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
               className="text-text-light hover:text-secondary-orange-gold transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.23 6.634c1.17 0 2.115.945 2.115 2.115v3.46c.365-.084.743-.127 1.134-.127 2.115 0 3.829 1.714 3.829 3.829s-1.714 3.829-3.829 3.829-3.829-1.714-3.829-3.829c0-.422.072-.828.204-1.215v-.607h-4.667v-.039c0-.982-.797-1.779-1.779-1.779-.983 0-1.779.796-1.779 1.779s.796 1.779 1.779 1.779c.148 0 .292-.019.431-.054l.056.883c-.229.043-.464.066-.704.066-1.464 0-2.651-1.187-2.651-2.651s1.187-2.651 2.651-2.651c.642 0 1.233.23 1.7.632v-.868c.005-.078-.041-.144-.117-.156-.168-.027-.339-.041-.513-.041-2.115 0-3.829-1.714-3.829-3.829s1.714-3.829 3.829-3.829c2.09 0 3.791 1.677 3.829 3.766z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle mt-8 pt-8 text-center text-text-light text-sm">
        <p>&copy; {new Date().getFullYear()} Éclat Cheveux. Tous droits réservés.</p>
        <p className="mt-2">
          Conçu avec passion pour votre beauté capillaire.
        </p>
      </div>
    </footer>
  );
};

export default Footer;