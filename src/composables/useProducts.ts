import { Pagination } from "@/models/pagination";
import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
  const store = useStore(); //access store to use getters / actions

  return {
    //GETTERS
    products: computed(() => store.getters['products/getProducts']),
    filteredProducts: computed(() => store.getters['products/getProductsByPagination']),
    isLoading: computed(() => store.getters['products/getIsLoading']),
    product: computed(() => store.getters['products/getProduct']),
    productsLength: computed(() => store.getters['products/getProductsLength']),

    //ACTIONS
    fetchProducts: () => store.dispatch('products/fetchProducts'),
    fetchProductById: (productId: number) => store.dispatch('products/fetchProductById', productId),
    fetchProductByTitle: (productTitle: string) => store.dispatch('products/fetchProductByTitle', productTitle),
    fetchProductByPagination: (pagination: Pagination) => store.dispatch('products/fetchProductByPagination', pagination)
  }
};

export default useProducts;