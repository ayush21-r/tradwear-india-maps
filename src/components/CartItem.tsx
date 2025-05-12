
import React from 'react';
import { CartItem as CartItemType } from '../types';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity, size } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(product.id, size, newQuantity);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row border-b py-4 gap-4">
      <div className="flex-shrink-0 w-full sm:w-24 h-24">
        <div 
          className="w-full h-full bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${product.image})` }}
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">Size: {size}</p>
            <p className="font-medium">₹{product.price.toLocaleString()}</p>
          </div>
          
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="flex items-center border rounded-md">
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-2 h-8"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                −
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-2 h-8"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => removeFromCart(product.id, size)}
            >
              <Trash size={16} className="text-tradwear-terracotta" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
