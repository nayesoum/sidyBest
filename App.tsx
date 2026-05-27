// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import PricingPage from './pages/PricingPage';
import MarriagePage from './pages/MarriagePage';
import RealisationsPage from './pages/RealisationsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import { CartItem } from './types';

// Wrapper component to provide navigation context to pages
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Simple scroll to top on route change (for full page transitions)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const handleAddToCart = useCallback((item: CartItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        cartItem =>
          cartItem.service.detail.id === item.service.detail.id &&
          cartItem.service.length === item.service.length
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
    setIsCartOpen(true);
  }, []);

  const handleRemoveItem = useCallback((id: string, length: string) => {
    setCartItems(prevItems => prevItems.filter(
      item => !(item.service.detail.id === id && item.service.length === length)
    ));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={handleNavigate} cartItemCount={cartItemCount} onToggleCart={toggleCart} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutUsPage />} />
          <Route path="/tarifs" element={<PricingPage onAddToCart={handleAddToCart} />} />
           <Route path="/marriage" element={<MarriagePage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/reservation" element={<BookingPage cartItems={cartItems} onClearCart={handleClearCart} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onNavigate={handleNavigate}
      />

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;