// components/Navbar.tsx
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { NavbarLink } from '../types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface NavbarProps {
  onNavigate: (path: string) => void;
  cartItemCount: number;
  onToggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, cartItemCount, onToggleCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLinkClick = (path: string) => {
    // For direct page navigation, use navigate
    navigate(path);
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-text-dark bg-opacity-95 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-text-light cursor-pointer" onClick={() => handleLinkClick('/')}>
          Éclat Cheveux
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link: NavbarLink) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleLinkClick(link.path); // Use React Router for navigation
              }}
              className="text-text-light hover:text-secondary-orange-gold text-lg font-sans font-medium transition duration-300 ease-in-out"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleCart}
            className="relative p-2 rounded-full bg-secondary-orange-gold text-text-dark hover:bg-border-subtle transition duration-300 ease-in-out"
            aria-label="Voir le panier"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs text-text-light">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={onToggleCart}
            className="relative p-2 mr-4 rounded-full bg-secondary-orange-gold text-text-dark hover:bg-border-subtle transition duration-300 ease-in-out"
            aria-label="Voir le panier"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs text-text-light">
                {cartItemCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-light focus:outline-none" aria-label="Toggle menu">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-text-dark py-4">
          <div className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link: NavbarLink) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className="text-text-light hover:text-secondary-orange-gold text-lg font-sans font-medium transition duration-300 ease-in-out"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;