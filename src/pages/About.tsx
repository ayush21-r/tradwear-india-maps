
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-tradwear-sage/10 pattern-bg">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl font-bold mb-4">About TradWear India</h1>
              <p className="text-lg text-muted-foreground">
                Celebrating and preserving India's rich textile heritage through authentic traditional clothing.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                At TradWear India, our mission is to showcase and preserve the rich diversity of India's traditional clothing heritage. We aim to connect artisans and weavers with a global audience, ensuring these age-old crafts continue to thrive in the modern world.
              </p>
              <p>
                We believe that each garment tells a story of cultural significance, regional identity, and ancestral craftsmanship. By bringing these stories to you, we hope to foster appreciation for India's textile traditions.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Our Collection</h2>
              <p className="mb-4">
                Our carefully curated collection features authentic traditional attire from various states across India. From the vibrant bandhani of Gujarat to the elegant Paithani sarees of Maharashtra, from the distinctive tribal wear of Meghalaya to the luxurious Pashmina shawls of Kashmir.
              </p>
              <p>
                Each piece in our collection is sourced directly from skilled craftspeople and artisans, ensuring authenticity and supporting local communities.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Supporting Artisans</h2>
              <p className="mb-4">
                We work directly with artisans, weavers, and craftspeople across India. By eliminating middlemen, we ensure that artisans receive fair compensation for their work and that traditional techniques are preserved for future generations.
              </p>
              <p>
                A portion of each sale goes back to community development initiatives in the regions where our products originate, supporting education and skill development.
              </p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Our Commitment to Quality</h2>
              <p>
                We promise to provide only authentic, high-quality traditional garments that represent the true cultural heritage of India. Each item is carefully inspected to ensure it meets our standards for craftsmanship, materials, and design authenticity.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
