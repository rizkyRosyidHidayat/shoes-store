export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  sale_price: number;
  colors: string[];
  sizes: number[];
  categories: string[];
  description: string;
  feature: string;
  favorite: boolean;
  detail: string[];
  images: {
    banner: string;
    details: string[];
    card: string;
  };
}
