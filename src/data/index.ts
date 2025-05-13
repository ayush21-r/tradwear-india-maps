import { Product, State } from "../types";

export const states: State[] = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    path: "M173.5,292.5l-4.3-2.6l-3.2-0.2l-1.9,2.3l-3.4,0.8l-1.3,1.5l-2.8-0.2l-3.1-2.7l-2.4,0.1l-3.8-2.9l-2.1-0.1l-3.7-3.3l-1-3l-1.9-1.6l-0.3-3.2l-2.1-2.8l0.8-3.5l2-2.4l-0.3-2.2l1.1-1.8l0.1-3.8l1.3-1.5l-0.4-3.7l-2-0.8l-2.7,0.6l-2.9-1.4l-1.1-3.6l-1.7-1.5l1.1-2.5l-0.7-3.5l-1.6-1.3l2.5-4l-0.8-2.3l-1.7-0.7l-0.3-1.3l3.4-1.4l0.3-2.5l2.3-1.1l3.6,0.7l2.5-3.2l4.4,1.8l2.7,0.3l1.4,1.8l2.9-0.2l3.5,2.5l2.3,0.3l0.8,1.8l2.5,2.2l3-1.1l3.7,0.2l3.7,1.3l2.9-0.4l1.7-2.3l2.7-1.5l2.6,2.5l2,0.7l2.4-1.2l3.7,0.1l0.6,4.2l1.7,2.1l3.5,1.5l2.4,2.4l1.5,3.1l2.8,1.7l1.8,2.6l-0.4,2.1l2,3.5l-2.9,2.9l-0.4,2.7l1.5,1.5l0.6,2.8l2.2,3.1l-0.5,3.1l1.2,2.4l2.9,1.3l2.6,3.4l-0.1,2.9l-2.2,0.9l-1.4,3.4l-1.9-3l-3.8-1.3l-2.3-2.6l-3.8,0.1l-5.5-2.5l-3.6,3.1l0.1,4.9l-1.6,2.3l-3.8,0.5l-2.6,2.2L173.5,292.5z",
    description: "Maharashtra is known for its mix of traditional and contemporary fashion, reflecting its rich cultural heritage and status as a fashion hub."
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    path: "M97.7,226l-1.5-3.1l-2.7-2.1l-2.4-0.6l-3.4-3.3l-1.6-3.8l-3.2-3.5l-0.8-2.5l1.4-3.2l-0.1-2.8l-1.9-3.1l-2.8-1.6l-1.3-2.8l-3.5-3.2l-0.2-3.7l-3.3-3.7l0.9-3.5l-0.2-3.5l-3.3-4.1l2.9-3.6l0.1-3.5l2-2.2l3.3-0.9l2.5-2.4l3.2-0.1l1.2-1.6l3.5-0.9l2.8,2.1l1.9,2.6l1.9-3l3.7-0.2l3-2.1l3-0.1l4.1,1l3.9-1.4l2.9,0.6l2.4-1.5l3.2,1.5l4.9,0.5l3,1.8l3.1-0.8l3.2,1.9l-0.9,2.9l-2.3,1.8l1.1,3.6l2.9,1.4l2.7-0.6l2,0.8l0.4,3.7l-1.3,1.5l-0.1,3.8l-1.1,1.8l0.3,2.2l-2,2.4l-0.8,3.5l2.1,2.8l0.3,3.2l1.9,1.6l1,3l3.7,3.3l2.1,0.1l3.8,2.9l-1,1.9l-3.8,1.6l-2.7-0.6l-3.3,2.5l-2,3.2l-2.8,2.6l0.2,2.4l-3.9,0.6l-3.5-0.8l-2.9,0.4l-1.5,3.6l-2.3,1.1l-4.8-0.8l-2.7,0.1l-3.7-3l-2.6-0.3l-1.8,1.8L97.7,226z",
    description: "Gujarat's traditional attire showcases vibrant colors and intricate mirror work, with styles like the chaniya choli and bandhani being particularly famous."
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    path: "M389.5,195.7l-2.7-1.3l-2.3,0.8l-2.6-0.5l-2.3,1.5l-1.8-0.1l-3.2-3.5l-1.1,0.3l-2.5-1.9l-0.3-2.6l-1.3-2.9l0.1-1.9l2.9-3.7l0.7-2.2l-1.8-2.3l-0.2-2l2.3-0.6l3.5-0.1l3.4-1.7l2.6,1l1.2,1.5l2.6-0.3l2.1,1.8l2.8-0.7l1.3,0.7l0.2,2.5l2.8,2.1l1.9,2.1l0.4,2.5l2.9,1.9l-1.3,2.9l1.6,3.1l-0.3,1.8l-3.1,3.7l-2,0.5L389.5,195.7z",
    description: "Meghalaya's traditional clothing features unique tribal attire with distinctive patterns, colorful weaves, and cultural significance for each tribe."
  },
  {
    id: 'assam',
    name: 'Assam',
    path: "M427.9,189.5l-1.7-1.9l0.6-2.3l-0.8-2.7l-2-2.6l-0.6-2.3l1.2-3.6l-0.2-2.7l-2.1-3.8l-0.9-3.7l-1.9-1.2l-0.9-2.8l0.9-0.8l-0.2-3.6l-1-1.7l1.1-2.2l-1.2-3.3l1.8-1.9l1.6,1.4l2.6-0.4l3.8,1.8l3.6-0.1l2.1,1l1.4-2.9l2.1-0.7l0.4,2.5l2.5,1.2l3.6-0.7l2.1-2.3l1.7,0.3l4.4-0.9l-0.5,2.1l2.6,4.5l-0.9,3.1l3.2,1.3l0.2,1.6l-3.5,1.2l-1.8,4.4l-2.5-0.7l-3,0.7l-4.9,3.6l-2.9-0.2l-2.4-2.7l-2.3,1.2l0.6,2l-0.9,2.2l-3.9,1.5l-0.9-1.5l-2.3,0.7l-1.8-1.8l-1.1,2.3l0.8,1.2l-2.3,1.1l1.2,3.1l-3.8-0.1l-0.7,1.5l-0.6,3l-2.1,1.3l0.2,2.8l-1.6,2.9l-1.8-0.1l-3.2-3.5l-1.1,0.3l-2.5-1.9l-0.3-2.6l-1.3-2.9l0.1-1.9l2.9-3.7l0.7-2.2l-1.8-2.3l-0.2-2l2.3-0.6l3.5-0.1l3.4-1.7l2.6,1l1.2,1.5l2.6-0.3l2.1,1.8l2.8-0.7L427.9,189.5z",
    description: "Assam's traditional garments include the mekhela chador for women and dhoti kurta for men, often made from muga and pat silk with intricate designs."
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    path: "M212.2,108.8l-2.9-1.3l-2.6,2.1l-3.3-0.1l-5.9-2.1l-3.8-0.2l-1.7-1.3l-2.3,0.4l-4-0.9l-5.1,1.3l-3.7-1.8l-3.4,0.8l-2.3-1.1l-2.6,1.8l-3.2-0.6l-3.5-2.9l-3.9,0.7l-2.7-0.8l-1.4-1.9l-3.1-1.4l-1.5-2.2l-2.6-1.7l-3.9-4.4l-2.9-4.8l-2.2-2.3l-4.1-1.3l-5.1-3.6l-0.5-2.5l-3-2.2l-1.5-2.1l1.4-2.9l-2.4-1.4l-2.2-3.2l-3-0.2l-1.5-2.8l-3.1-1.7l-0.2-2.4l2.9-5.9l-2.6-2.6l0.5-2.5l-3.7-0.1l-2.5-4.3l-0.5-3.2l3.9-4.8l2.3,2l3.2-2.2l1.7,0.1l4.2-4.4l5.4-1.5l3.7-2.5l5,0.9l3.5-4.3l3.4-0.1l2.8-2.4l4.9-0.6l4.6-2.2l8.6-0.3l5.9-1.4l6.9-0.7l3.2,1.2l6.8-2.6l3.5-4.9l2-0.1l3,2.4l4,1.2l5.8-1l1.3,2.2l3.4,0.3l2.2,3.3l3.1,1.1l5.8-0.5l2.8-2.4l3.2-0.9l2.6,1.5l5,0.3l3.9,2.4l5,0.9l3.2-1.6l2.6,0.8l0.7,5.6l2.9,2.5l-1.1,2.3l0.4,2.5l-2.4,1.2l-0.6,2.4l-3.1,1.6l-0.8,2.3l-3.1,1.3l0.1,1.4l-5.1-0.3l-2.9,3.9l0.9,1.8l-1.5,1.9l-0.3,1.9l-2,0.2l-1.1,1.7l1.3,3l-2.7,3.9l3.7,2.8l2.9,5.3l-0.3,2.7l-3.4,1.8l-2.4,2.9l1.1,1.9l-1.3,2.5l-3.9,0.6l-0.1,1.8l-2.2,3.4l2.5,2.5l0.1,2.3l3.4,0.9l1.8,2.2l-2,4.1l-2.4,0.4l-1.1,2.3l-2.2,0.7L212.2,108.8z",
    description: "Jammu & Kashmir's traditional clothing includes the elegant pheran, pashmina shawls, and intricate embroidery that reflects the region's cultural diversity."
  },
];

export const products: Product[] = [
  // Maharashtra Products
  {
    id: 'mh-001',
    name: 'Paithani Saree',
    state: 'maharashtra',
    description: 'Luxurious handwoven silk saree featuring the iconic peacock design and gold zari work. This traditional masterpiece from Maharashtra takes over 500 hours to create.',
    price: 15000,
    image: '/lovable-uploads/e1b0f6dc-986e-4442-b5bf-3190ec6bf515.png',
    gender: 'women',
    sizes: ['Standard', 'Custom']
  },
  {
    id: 'mh-002',
    name: 'Nauvari Saree',
    state: 'maharashtra',
    description: 'The traditional nine-yard saree draped in the unique Maharashtrian style, perfect for festive occasions and classical dance performances.',
    price: 8500,
    image: '/lovable-uploads/8bf73a27-b7c1-48f5-9b8d-cb09fd6679ed.png',
    gender: 'women',
    sizes: ['Standard', 'Custom']
  },
  {
    id: 'mh-003',
    name: 'Maharashtrian Dhoti Kurta',
    state: 'maharashtra',
    description: 'Elegant white cotton dhoti with a matching kurta, complete with the traditional Maharashtrian pheta (turban).',
    price: 3200,
    image: '/lovable-uploads/18f0eeb7-dedc-4b5c-ba65-240bbdd983d4.png',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'mh-004',
    name: 'Kolhapuri Saaj',
    state: 'maharashtra',
    description: 'Traditional bridal necklace featuring intricate gold work and pearls, an essential jewelry piece for Maharashtrian weddings.',
    price: 12000,
    image: '/lovable-uploads/f8842ffb-e3dc-45a7-810c-10b9481a1606.png',
    gender: 'women',
    sizes: ['One Size']
  },

  // Gujarat Products
  {
    id: 'gj-001',
    name: 'Bandhani Saree',
    state: 'gujarat',
    description: 'Vibrant tie-dyed saree showcasing the traditional Bandhani craft of Gujarat with thousands of tiny knots creating beautiful patterns.',
    price: 6500,
    image: '/images/bandhani-saree.jpg',
    gender: 'women',
    sizes: ['Standard', 'Custom']
  },
  {
    id: 'gj-002',
    name: 'Chaniya Choli',
    state: 'gujarat',
    description: 'Colorful three-piece ensemble featuring a lehenga (skirt), choli (blouse), and dupatta with mirror work and embroidery, perfect for Navratri celebrations.',
    price: 8900,
    image: '/images/chaniya-choli.jpg',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'gj-003',
    name: 'Kutchi Embroidered Jacket',
    state: 'gujarat',
    description: 'Handcrafted jacket featuring the iconic Kutch embroidery with mirrors, intricate threadwork, and vibrant colors.',
    price: 4200,
    image: '/images/kutchi-jacket.jpg',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'gj-004',
    name: 'Patola Silk Saree',
    state: 'gujarat',
    description: 'Double ikat silk saree from Patan, Gujarat, featuring geometric patterns. This rare textile takes months to create and is considered an heirloom piece.',
    price: 25000,
    image: '/images/patola-saree.jpg',
    gender: 'women',
    sizes: ['Standard']
  },

  // Meghalaya Products
  {
    id: 'ml-001',
    name: 'Jainsem',
    state: 'meghalaya',
    description: 'Traditional Khasi women\'s attire consisting of a cylindrical cloth pinned at shoulders and worn with a blouse, featuring beautiful indigenous patterns.',
    price: 3800,
    image: '/images/jainsem.jpg',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'ml-002',
    name: 'Dhara',
    state: 'meghalaya',
    description: 'Garo traditional dress woven with colorful threads and natural dyes, typically worn during festivals and ceremonies.',
    price: 4200,
    image: '/images/dhara.jpg',
    gender: 'women',
    sizes: ['One Size']
  },
  {
    id: 'ml-003',
    name: 'Jymphong',
    state: 'meghalaya',
    description: 'Traditional Khasi men\'s long coat made of thick handwoven fabric, perfect for the cool climate of Meghalaya hills.',
    price: 2800,
    image: '/images/jymphong.jpg',
    gender: 'men',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'ml-004',
    name: 'Khasi Traditional Beads',
    state: 'meghalaya',
    description: 'Handcrafted coral and gold beads necklace, a traditional ornament for Khasi women during ceremonies.',
    price: 5500,
    image: '/images/khasi-beads.jpg',
    gender: 'women',
    sizes: ['One Size']
  },

  // Assam Products
  {
    id: 'as-001',
    name: 'Mekhela Chador',
    state: 'assam',
    description: 'Traditional two-piece Assamese saree woven from muga silk with intricate motifs inspired by nature and Assamese culture.',
    price: 9500,
    image: '/images/mekhela-chador.jpg',
    gender: 'women',
    sizes: ['Standard', 'Custom']
  },
  {
    id: 'as-002',
    name: 'Gamosa',
    state: 'assam',
    description: 'Handwoven cotton towel with red woven motifs on white background, used as a symbol of Assamese culture and respect.',
    price: 850,
    image: '/images/gamosa.jpg',
    gender: 'unisex',
    sizes: ['One Size']
  },
  {
    id: 'as-003',
    name: 'Assamese Silk Kurta',
    state: 'assam',
    description: 'Men\'s kurta crafted from authentic Assam silk with traditional motifs, perfect for festivals and special occasions.',
    price: 3200,
    image: '/images/assam-kurta.jpg',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'as-004',
    name: 'Muga Silk Stole',
    state: 'assam',
    description: 'Golden-hued muga silk stole with intricate border designs, showcasing the unique natural shine that improves with each wash.',
    price: 4800,
    image: '/images/muga-stole.jpg',
    gender: 'unisex',
    sizes: ['One Size']
  },

  // Jammu & Kashmir Products
  {
    id: 'jk-001',
    name: 'Pashmina Shawl',
    state: 'jammu-kashmir',
    description: 'Luxuriously soft hand-spun and hand-woven shawl made from the fine undercoat of Changthangi goats, featuring traditional Kashmiri embroidery.',
    price: 18500,
    image: '/images/pashmina-shawl.jpg',
    gender: 'unisex',
    sizes: ['One Size']
  },
  {
    id: 'jk-002',
    name: 'Pheran',
    state: 'jammu-kashmir',
    description: 'Traditional loose woolen overgarment worn by both men and women in Kashmir during winter, featuring beautiful embroidery work.',
    price: 5200,
    image: '/images/pheran.jpg',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'jk-003',
    name: 'Kashmiri Embroidered Saree',
    state: 'jammu-kashmir',
    description: 'Elegant saree with intricate Kashmiri aari embroidery work depicting floral patterns and paisley motifs.',
    price: 12000,
    image: '/images/kashmiri-saree.jpg',
    gender: 'women',
    sizes: ['Standard']
  },
  {
    id: 'jk-004',
    name: 'Ladakhi Goncha',
    state: 'jammu-kashmir',
    description: 'Traditional Ladakhi robe made from thick wool, tied with a sash at the waist, perfect for the high-altitude cold climate.',
    price: 7800,
    image: '/images/ladakhi-goncha.jpg',
    gender: 'unisex',
    sizes: ['M', 'L', 'XL']
  }
];

export const placeholderImageByState: { [key: string]: string } = {
  maharashtra: '/images/paithani-saree.jpg',
  gujarat: '/images/chaniya-choli.jpg',
  meghalaya: '/images/jainsem.jpg',
  assam: '/images/mekhela-chador.jpg',
  'jammu-kashmir': '/images/pashmina-shawl.jpg'
};
