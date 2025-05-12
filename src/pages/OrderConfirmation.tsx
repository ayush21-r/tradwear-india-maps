
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-tradwear-sage" />
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg mb-8">
            Your order has been received and is being processed. We'll send you an email with the order details soon.
          </p>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="text-sm mb-2">Order Number: <span className="font-medium">TW-{Math.floor(100000 + Math.random() * 900000)}</span></p>
            <p className="text-sm">Estimated Delivery: <span className="font-medium">5-7 Business Days</span></p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="default" className="bg-tradwear-terracotta hover:bg-tradwear-terracotta/90 w-full">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
