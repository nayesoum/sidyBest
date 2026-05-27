// components/CartSidebar.tsx
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string, length: string) => void;
  onNavigate: (path: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onNavigate }) => {
  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.service.detail.price * item.quantity, 0);
  const totalCartTime = cartItems.reduce((acc, item) => acc + item.service.detail.time * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Votre panier est vide. Veuillez ajouter des services avant de réserver.");
      return;
    }
    // Changed to direct page path for BookingPage
    onNavigate('/reservation');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Overlay */}
      {isOpen && (
        <div className="absolute inset-0 bg-text-dark bg-opacity-50" onClick={onClose}></div>
      )}

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-text-dark shadow-xl flex flex-col p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-primary-maroon">
          <h2 className="text-3xl font-serif font-bold text-text-light">Votre Panier</h2>
          <button onClick={onClose} className="text-text-light hover:text-secondary-orange-gold text-4xl leading-none">
            &times;
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-mid-grey-text text-center py-8">Votre panier est vide.</p>
        ) : (
          <ul className="flex-grow space-y-4">
            {cartItems.map((item, index) => (
              <li key={`${item.service.detail.id}-${item.service.length}-${index}`} className="flex justify-between items-center bg-primary-maroon p-4 rounded-lg shadow-sm">
                <div>
                  <p className="font-semibold text-text-light">{item.service.detail.name} - {item.service.length}</p>
                  <p className="text-mid-grey-text text-sm">Quantité: {item.quantity}</p>
                  <p className="text-secondary-orange-gold text-lg font-bold">{item.service.detail.price * item.quantity}€</p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.service.detail.id, item.service.length)}
                  className="text-red-400 hover:text-red-600 font-bold text-xl ml-4"
                  aria-label={`Supprimer ${item.service.detail.name}`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-6 border-t border-primary-maroon">
          <div className="flex justify-between items-center text-xl font-bold text-text-light mb-2">
            <span>Total:</span>
            <span>{totalCartPrice}€</span>
          </div>
          <div className="flex justify-between items-center text-mid-grey-text text-lg mb-6">
            <span>Temps estimé total:</span>
            <span>{totalCartTime}h</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-btn-background-dark text-btn-text-light font-semibold py-4 px-6 rounded-lg text-xl hover:bg-secondary-orange-gold hover:text-text-dark transition duration-300 ease-in-out"
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;