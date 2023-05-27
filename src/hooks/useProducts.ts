import { create } from "zustand";
import { getAllProducts } from "../actions/getAllProducts";
import { Product } from "../types";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  getAllProducts: () => Promise<void>;
}

const useProducts = create<ProductsState>((set) => ({
  products: [],
  loading: true,
  error: null,
  getAllProducts: async () => {
    try {
      const data = await getAllProducts();
      set({ products: data, loading: false });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));

export default useProducts;
