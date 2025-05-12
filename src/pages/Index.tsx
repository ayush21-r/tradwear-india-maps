
import React from 'react';
import IndiaMap from '../components/IndiaMap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { placeholderImageByState, states } from '../data';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-tradwear-sage/10 pattern-bg">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Discover India's Traditional Fashion
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Explore the cultural heritage through authentic regional clothing from across the nation.
              </p>
              <div className="py-6">
                <IndiaMap />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Click on a highlighted state to explore traditional attire
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Featured States Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center">
            Featured States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.slice(0, 3).map((state) => (
              <div key={state.id} className="group relative overflow-hidden rounded-lg shadow-md hover-lift">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${placeholderImageByState[state.id]})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl text-white mb-2">{state.name}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{state.description}</p>
                  <Link 
                    to={`/state/${state.id}`}
                    className="inline-flex items-center font-medium text-white hover:text-tradwear-terracotta transition-colors"
                  >
                    Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center font-medium text-tradwear-terracotta hover:text-tradwear-terracotta/80 transition-colors"
            >
              View All States <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-tradwear-cream/50 pattern-bg py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                About TradWear India
              </h2>
              <p className="mb-6">
                TradWear India celebrates the rich diversity of traditional Indian clothing, showcasing authentic attire from different states and regions. Our platform connects you with carefully curated collections that represent India's cultural heritage.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center font-medium text-tradwear-terracotta hover:text-tradwear-terracotta/80 transition-colors"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
