// components/BookingForm.tsx
import React, { useState, useEffect } from 'react';
import { BookingFormData, CartItem } from '../types';

interface BookingFormProps {
  cartItems: CartItem[];
  onBookingSubmit: (formData: BookingFormData) => void;
  onClearCart: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ cartItems, onBookingSubmit, onClearCart }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    time: '',
    services: cartItems,
    totalPrice: cartItems.reduce((acc, item) => acc + item.service.detail.price * item.quantity, 0),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Update services and total price if cartItems change
    setFormData(prev => ({
      ...prev,
      services: cartItems,
      totalPrice: cartItems.reduce((acc, item) => acc + item.service.detail.price * item.quantity, 0),
    }));
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'Le prénom est requis.';
    if (!formData.lastName) newErrors.lastName = 'Le nom est requis.';
    if (!formData.phone) newErrors.phone = 'Le numéro de téléphone est requis.';
    else if (!/^\+?[0-9\s-]{7,20}$/.test(formData.phone)) newErrors.phone = 'Numéro de téléphone invalide.';
    if (!formData.date) newErrors.date = 'La date est requise.';
    if (!formData.time) newErrors.time = 'L\'heure est requise.';
    if (formData.services.length === 0) newErrors.services = 'Veuillez ajouter des services à votre panier.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onBookingSubmit(formData);
    onClearCart();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-text-dark p-8 rounded-lg shadow-xl text-center max-w-lg mx-auto my-12 border border-border-subtle">
        <h2 className="text-3xl font-serif font-bold text-text-light mb-4">Réservation Confirmée !</h2>
        <p className="text-mid-grey-text mb-6">
          Merci pour votre réservation. Un email de confirmation et un SMS vous seront envoyés sous peu.
          Nous avons hâte de vous accueillir !
        </p>
        <button
          onClick={() => window.location.reload()} // Simple reload to reset state for demo
          className="bg-btn-background-dark text-btn-text-light font-semibold py-3 px-8 rounded-lg hover:bg-secondary-orange-gold hover:text-text-dark transition duration-300 ease-in-out"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0]; // Get today's date for min attribute

  return (
    <div className="bg-text-dark p-8 rounded-lg shadow-xl max-w-3xl mx-auto my-12 border border-primary-maroon">
      <h2 className="text-4xl font-serif font-bold text-text-light mb-8 text-center">Réservez Votre Rendez-vous</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Information */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-serif font-semibold text-text-light mb-4 border-b pb-2 border-border-subtle">Vos Coordonnées</h3>
        </div>
        <div>
          <label htmlFor="firstName" className="block text-text-light text-lg font-semibold mb-2">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.firstName ? 'border-red-500' : 'border-border-subtle'}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-text-light text-lg font-semibold mb-2">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.lastName ? 'border-red-500' : 'border-border-subtle'}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="phone" className="block text-text-light text-lg font-semibold mb-2">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.phone ? 'border-red-500' : 'border-border-subtle'}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Appointment Details */}
        <div className="md:col-span-2 mt-6">
          <h3 className="text-2xl font-serif font-semibold text-text-light mb-4 border-b pb-2 border-border-subtle">Détails du Rendez-vous</h3>
        </div>
        <div>
          <label htmlFor="date" className="block text-text-light text-lg font-semibold mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.date ? 'border-red-500' : 'border-border-subtle'}`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time" className="block text-text-light text-lg font-semibold mb-2">Heure</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.time ? 'border-red-500' : 'border-border-subtle'}`}
          />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>

        {/* Selected Services */}
        <div className="md:col-span-2 mt-6">
          <h3 className="text-2xl font-serif font-semibold text-text-light mb-4 border-b pb-2 border-border-subtle">Prestations Choisies</h3>
          {formData.services.length === 0 ? (
            <p className="text-mid-grey-text italic">Aucune prestation sélectionnée. Veuillez ajouter des services depuis la page "Tarifs".</p>
          ) : (
            <ul className="space-y-3">
              {formData.services.map((item, index) => (
                <li key={`${item.service.detail.id}-${item.service.length}-${index}`} className="flex justify-between items-center bg-primary-maroon p-3 rounded-lg">
                  <span className="font-medium text-text-light">{item.service.detail.name} - {item.service.length}</span>
                  <span className="font-bold text-secondary-orange-gold">{item.service.detail.price * item.quantity}€</span>
                </li>
              ))}
            </ul>
          )}
          {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
        </div>

        {/* Total and Payment */}
        <div className="md:col-span-2 mt-6 pt-4 border-t border-border-subtle flex justify-between items-center">
          <span className="text-2xl font-serif font-bold text-text-light">Total à Payer:</span>
          <span className="text-3xl font-bold text-secondary-orange-gold">{formData.totalPrice}€</span>
        </div>
        <div className="md:col-span-2 text-center mt-4">
          <p className="text-mid-grey-text text-sm italic mb-4">
            (Le paiement via Stripe sera initié après la confirmation de votre rendez-vous.)
          </p>
          <button
            type="submit"
            className="w-full md:w-auto bg-btn-background-dark text-btn-text-light font-semibold py-4 px-10 rounded-lg text-xl hover:bg-secondary-orange-gold hover:text-text-dark transition duration-300 ease-in-out"
          >
            Confirmer la Réservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;