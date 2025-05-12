
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tradwear-dark text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">TradWear India</h3>
            <p className="text-sm text-gray-300 mb-4">
              Celebrating the rich cultural heritage of Indian traditional clothing 
              from diverse regions across the country.
            </p>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} TradWear India. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">123 Cultural Avenue</p>
            <p className="text-sm text-gray-300 mb-2">New Delhi, India</p>
            <p className="text-sm text-gray-300 mb-2">Email: info@tradwearindia.com</p>
            <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
