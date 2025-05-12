
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import CartItemComponent from '../components/CartItem';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="inline-flex items-center text-sm mb-6 hover:text-tradwear-terracotta transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" /> Continue Shopping
        </Link>
        
        <h1 className="font-display text-3xl font-bold mb-6">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <CartItemComponent key={`${item.product.id}-${item.size}`} item={item} />
              ))}
              
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  className="text-sm"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 sticky top-24">
                <h2 className="font-display text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-tradwear-terracotta hover:bg-tradwear-terracotta/90"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="font-display text-2xl mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some items to your cart to get started.</p>
            <Link to="/">
              <Button className="bg-tradwear-terracotta hover:bg-tradwear-terracotta/90">
                Browse Products
              </Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
