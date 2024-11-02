import { createContext, useContext } from "react";
import ProductsType from "../types/products";

export const productsContext = createContext<ProductsType[] | undefined>(
  [] || undefined
);
export function useProductsContext() {
  const context = useContext(productsContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}
