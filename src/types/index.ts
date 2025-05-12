
export interface State {
  id: string;
  name: string;
  path: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  state: string;
  description: string;
  price: number;
  image: string;
  gender: 'men' | 'women' | 'unisex';
  sizes: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
