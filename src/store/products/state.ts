import { Product } from "@/models/product";

export interface ProductStateInterface {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  selectedProduct: Product | null;
}

//launch the properties
function state(): ProductStateInterface {
  return {
    products: [],
    filteredProducts: [],
    isLoading: false,
    selectedProduct: null,
  }
}

export default state;