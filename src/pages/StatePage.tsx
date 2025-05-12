
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, states } from '../data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const StatePage = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const navigate = useNavigate();
  
  const state = states.find(s => s.id === stateId);
  const stateProducts = products.filter(product => product.state === stateId);

  useEffect(() => {
    if (!state) {
      navigate('/not-found');
    }
  }, [state, navigate]);

  if (!state) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-tradwear-sage/10 pattern-bg">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Traditional Clothing from {state.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {state.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stateProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {stateProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products available for this state at the moment.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StatePage;
