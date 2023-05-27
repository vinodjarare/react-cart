import { create } from "zustand";
import { getProduct } from "../actions/getProduct";
import { Product } from "../types";

interface ProductsState {
  product: Product;
  loading: boolean;
  error: string | null;
  getProduct: (id: number) => Promise<void>;
}

const useProduct = create<ProductsState>((set) => ({
  product: {} as Product,
  loading: true,
  error: null,
  getProduct: async (id: number) => {
    try {
      const data = await getProduct(id);
      set({ product: data, loading: false });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));

export default useProduct;
