// components/ContactForm.tsx
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Le nom est requis.';
    if (!formData.email) {
      newErrors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide.';
    }
    if (!formData.message) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log('Contact form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-text-dark p-8 rounded-lg shadow-xl max-w-xl mx-auto border border-primary-maroon">
      <h2 className="text-4xl font-serif font-bold text-text-light mb-8 text-center">Contactez-nous</h2>

      {status === 'success' && (
        <div className="bg-green-700 border border-green-400 text-text-light px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Succès!</strong>
          <span className="block sm:inline ml-2">Votre message a été envoyé avec succès.</span>
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-700 border border-red-400 text-text-light px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline ml-2">Il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-text-light text-lg font-semibold mb-2">Votre Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.name ? 'border-red-500' : 'border-border-subtle'}`}
            disabled={status === 'submitting'}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-text-light text-lg font-semibold mb-2">Votre Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold bg-input-background text-text-light ${errors.email ? 'border-red-500' : 'border-border-subtle'}`}
            disabled={status === 'submitting'}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-text-light text-lg font-semibold mb-2">Votre Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary-orange-gold resize-y bg-input-background text-text-light ${errors.message ? 'border-red-500' : 'border-border-subtle'}`}
            disabled={status === 'submitting'}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-btn-background-dark text-btn-text-light font-semibold py-3 px-6 rounded-lg text-lg hover:bg-secondary-orange-gold hover:text-text-dark transition duration-300 ease-in-out flex items-center justify-center"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            'Envoyer le Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;