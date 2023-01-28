import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ProductStateInterface } from './state';

const mutations: MutationTree<ProductStateInterface> = {
  //mutation to add received products to state as parameter
  setProducts(state: ProductStateInterface, products: Product[]) {
    state.products = products;
  },
  //mutation to add products
  setFilteredProducts(state: ProductStateInterface, filteredProducts: Product[]) {
    state.filteredProducts = filteredProducts;
  },
  //mutation that is true while 
  setIsLoading(state: ProductStateInterface, value: boolean) {
    state.isLoading = value;
  },
  //mutation to add a product to state
  setSelectedProduct(state, product: Product) {
    state.selectedProduct = product;
  },
}

export default mutations;