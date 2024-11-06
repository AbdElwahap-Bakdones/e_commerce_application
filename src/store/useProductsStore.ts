import React from "react";
import ProductsType from "../types/products";
import { create } from "zustand";
interface StoreType {
  Products: ProductsType[];
  setProducts: (products: ProductsType[]) => void;
}
const useProductsStore = create<StoreType>((set) => ({
  Products: [
    {
      category: "",
      description: "",
      features: [""],
      id: "",
      images: "",
      name: "",
      price: 5,
      ratings: { average: 5, totalReviews: 2 },
      stock: 4,
    },
  ],
  setProducts: (products) => set((status) => ({ Products: products })),
}));

export default useProductsStore;
