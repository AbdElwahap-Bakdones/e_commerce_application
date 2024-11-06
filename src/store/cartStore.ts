import { create } from "zustand";
import { CartStorageType } from "../actions/ManageCart";

interface StoreType {
  carts: CartStorageType;
  add_cart: (id: string, price: number, image: string) => void;
  set_cart: (cart: CartStorageType) => void;
  delete_cart: (id: string) => void;
}

const useCartStore = create<StoreType>((set) => ({
  carts: { carts: [], totalCount: 0, totalPrice: 0 },

  add_cart: (id: string, price: number, image: string) =>
    set((state) => {
      // Check if the product already exists in the cart
      const existingProductIndex = state.carts.carts.findIndex(
        (item) => item.id === id
      );

      let updatedCarts = [...state.carts.carts];
      let updatedTotalPrice = state.carts.totalPrice;
      let updatedTotalCount = state.carts.totalCount;

      if (existingProductIndex >= 0) {
        // Product exists, update the count and total price
        updatedCarts[existingProductIndex].count += 1;
        updatedTotalPrice += price;
        updatedTotalCount += 1;
      } else {
        // Product does not exist, add it to the cart
        updatedCarts.push({ id, price, count: 1, image: "" });
        updatedTotalPrice += price;
        updatedTotalCount += 1;
      }

      return {
        carts: {
          carts: updatedCarts,
          totalCount: updatedTotalCount,
          totalPrice: updatedTotalPrice,
        },
      };
    }),
  set_cart: (cart: CartStorageType) => set({ carts: cart }),

  delete_cart: (id: string) =>
    set((state) => {
      const existingProductIndex = state.carts.carts.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex >= 0) {
        const updatedCarts = [...state.carts.carts];
        const product = updatedCarts[existingProductIndex];

        // Decrease the count
        if (product.count > 1) {
          product.count -= 1;
          return {
            carts: {
              carts: updatedCarts,
              totalCount: state.carts.totalCount - 1,
              totalPrice: state.carts.totalPrice - product.price,
            },
          };
        } else {
          // If count is 1, remove the product from the cart
          updatedCarts.splice(existingProductIndex, 1);
          return {
            carts: {
              carts: updatedCarts,
              totalCount: state.carts.totalCount - 1,
              totalPrice: state.carts.totalPrice - product.price,
            },
          };
        }
      }

      return state; // Return the current state if the product is not found
    }),
}));

export default useCartStore;
