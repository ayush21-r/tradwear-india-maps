
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="aspect-square overflow-hidden bg-muted">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-display text-lg font-medium mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description.substring(0, 60)}...</p>
          <div className="flex justify-between items-center">
            <span className="font-medium text-tradwear-dark">₹{product.price.toLocaleString()}</span>
            <span className="text-xs px-2 py-1 bg-muted rounded-full">{product.gender}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
