// pages/BookingPage.tsx
import React from 'react';
import BookingForm from '../components/BookingForm';
import { CartItem, BookingFormData } from '../types';

interface BookingPageProps {
  cartItems: CartItem[];
  onClearCart: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ cartItems, onClearCart }) => {
  const handleBookingSubmit = (formData: BookingFormData) => {
    console.log('Final booking data submitted:', formData);
    alert('Réservation soumise ! (Email/SMS de confirmation et paiement Stripe seront gérés par le backend.)');
    // In a real app, this would send data to a backend for processing
    // and then navigate to a confirmation page.
  };

  return (
    <div className="pt-20 pb-16 min-h-screen"> {/* Add padding top to account for fixed Navbar */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <BookingForm
          cartItems={cartItems}
          onBookingSubmit={handleBookingSubmit}
          onClearCart={onClearCart}
        />
      </section>
    </div>
  );
};

export default BookingPage;