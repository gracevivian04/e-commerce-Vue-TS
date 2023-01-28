import { GetterTree } from "vuex";
import { ProductStateInterface } from './state';
import { IState } from '../index';

const getters: GetterTree<ProductStateInterface, IState> = {
  //define getters
  getProducts(state) {
    return state.products;
  },
  getProductsPagination(state) {
    return state.filteredProducts;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getProduct(state) {
    return state.selectedProduct;
  },
  getProductsLength(state) {
    return state.products.length;
  }
};

export default getters;