
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const { getCartItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-30 w-full border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl md:text-3xl font-bold text-tradwear-dark">
            TradWear <span className="text-tradwear-terracotta">India</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-tradwear-terracotta transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-tradwear-terracotta transition-colors">About</Link>
          <Link to="/contact" className="font-medium hover:text-tradwear-terracotta transition-colors">Contact</Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" className="p-2 hover:bg-muted">
              <ShoppingBag size={22} />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-tradwear-terracotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-background animate-scale-in">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <Link 
                to="/" 
                className="text-2xl font-medium hover:text-tradwear-terracotta"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-2xl font-medium hover:text-tradwear-terracotta"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-2xl font-medium hover:text-tradwear-terracotta"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/cart" 
                className="text-2xl font-medium hover:text-tradwear-terracotta flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
                {getCartItemCount() > 0 && (
                  <span className="bg-tradwear-terracotta text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                    {getCartItemCount()}
                  </span>
                )}
              </Link>
              <Button 
                variant="outline" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                Close Menu
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
