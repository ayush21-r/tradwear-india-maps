
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products, states } from '../data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft } from 'lucide-react';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === productId);
  const state = product ? states.find(s => s.id === product.state) : null;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    if (!product) {
      navigate('/not-found');
      return;
    }
    
    // Set default size
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product, navigate]);

  if (!product || !state) {
    return null;
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addToCart(product, quantity, selectedSize);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to={`/state/${state.id}`}
            className="inline-flex items-center text-sm mb-6 hover:text-tradwear-terracotta transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to {state.name} Collection
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-display text-3xl font-bold mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <span className="text-xs px-2 py-1 bg-muted rounded-full mr-3">{product.gender}</span>
                <Link 
                  to={`/state/${state.id}`}
                  className="text-sm text-tradwear-terracotta hover:underline"
                >
                  {state.name}
                </Link>
              </div>
              
              <p className="text-2xl font-medium mb-4">₹{product.price.toLocaleString()}</p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[60px] ${selectedSize === size ? 'bg-tradwear-terracotta hover:bg-tradwear-terracotta/90' : ''}`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center border rounded-md max-w-[120px]">
                  <Button 
                    variant="ghost" 
                    className="px-3 h-10"
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    −
                  </Button>
                  <span className="flex-grow text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    className="px-3 h-10"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart} 
                disabled={!selectedSize}
                className="bg-tradwear-terracotta hover:bg-tradwear-terracotta/90 w-full md:max-w-[250px]"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
