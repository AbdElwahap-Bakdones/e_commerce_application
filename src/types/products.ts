export default interface ProductsType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  features: string[];
  ratings: Features;
  images: string;
}
interface Features {
  average: number;
  totalReviews: number;
}

export interface SimpleProductsType {
  id: string;
  // name: string;
  price: number;
  image: string;
}

export interface CartType {
  id: string;
  price: number;
  count: number;
  image: string;
}
