import { CartType } from "../types/products";

export interface CartStorageType {
  carts: CartType[];
  totalPrice: number;
  totalCount: number;
}
export const get_cart_storage: () => CartStorageType | null = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : null;
};
function getCartFromLocalStorage(): CartStorageType {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : { carts: [], totalPrice: 0, totalCount: 0 };
}

function saveCartToLocalStorage(cart: CartStorageType) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addProductsToCart(id: string, price: number, image: string) {
  const existingCart = getCartFromLocalStorage();
  const existingProductIndex = existingCart.carts.findIndex(
    (item) => item.id === id
  );

  if (existingProductIndex >= 0) {
    existingCart.carts[existingProductIndex].count += 1;
  } else {
    existingCart.carts.push({ id, price, count: 1, image });
  }

  existingCart.totalPrice += price;
  existingCart.totalCount += 1;

  saveCartToLocalStorage(existingCart);
}

function updateProductsInCart(id: string, newCount: number) {
  const existingCart = getCartFromLocalStorage();
  const existingProductIndex = existingCart.carts.findIndex(
    (item) => item.id === id
  );

  if (existingProductIndex >= 0) {
    const product = existingCart.carts[existingProductIndex];
    const priceDifference = (newCount - product.count) * product.price;

    existingCart.carts[existingProductIndex].count = newCount;
    existingCart.totalPrice += priceDifference;
    existingCart.totalCount += newCount > 0 ? newCount - product.count : 0; // Update totalCount

    saveCartToLocalStorage(existingCart);
  }
}

function deleteProductsFromCart(id: string) {
  const existingCart = getCartFromLocalStorage();
  const existingProductIndex = existingCart.carts.findIndex(
    (item) => item.id === id
  );

  if (existingProductIndex >= 0) {
    const product = existingCart.carts[existingProductIndex];

    // Decrease the count
    if (product.count > 1) {
      product.count -= 1;
      existingCart.totalPrice -= product.price;
      existingCart.totalCount -= 1;
    } else {
      // If count is 1, remove the product from the cart
      existingCart.totalPrice -= product.price;
      existingCart.totalCount -= 1;
      existingCart.carts.splice(existingProductIndex, 1); // Remove the product entirely
    }

    // Save the updated cart to local storage
    saveCartToLocalStorage(existingCart);
  }
}

export { addProductsToCart, updateProductsInCart, deleteProductsFromCart };
