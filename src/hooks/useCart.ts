import { create } from "zustand";
import { Product } from "../types";

type CartState = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const useCart = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },
  removeFromCart: (product) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== product.id),
    }));
  },
}));

export default useCart;
