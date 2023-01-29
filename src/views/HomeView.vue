<template>
  <div>
    <NavLinks @showAll="showProducts" />
    <SearchBar />
    <div class="home">
      <h1>Available Products</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else class="product-list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" @click="productInfo(product.id)"/>
      </div>
    </div>
    <PageSelector @previous="goBack" @next="goForward"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavLinks from '@/components/NavLinks.vue';
import SearchBar from '@/components/SearchBar.vue';
import PageSelector from '@/components/PageSelector.vue';
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composables/useProducts';
import { useRouter } from 'vue-router';
//import { Product } from '@/models/product';
import router from '@/router';


export default defineComponent({
  name: 'HomeView',
  components: {
    NavLinks,
    SearchBar,
    PageSelector,
    ProductItem,
},
methods: {
  productInfo(id: number) {
    router.push({name: 'product', params: { id }});
  },
},
setup() {
  const { products, filteredProducts, isLoading, productsLength, fetchProducts, fetchProductByPagination } = useProducts();
  const router = useRouter();
  fetchProducts();

  const perPage = 20;
  const showProducts = () => {
    fetchProductByPagination({offset: 0, limit: perPage});
  }
  fetchProductByPagination({offset: 0, limit: perPage});

  let offset = 0;
  const goBack = () => {
    if (offset == 0) {
      alert(`Click 'Go forward' to view more products`)
    } else {
      offset = offset - 20;
      fetchProductByPagination({offset: offset, limit: perPage});
    }
  }
  const goForward = () => {
    if (offset >= productsLength.value) {
      alert(`Click 'Go back' to view products`)
    } else {
      offset = offset + 20;
      fetchProductByPagination({offset: offset, limit: perPage});  
    }
  }
  const title = ref("");
  const searchTitle = (newTitle: string) => {
    title.value = newTitle;
  };

  return {
    products,
    filteredProducts,
    isLoading,
    //productInfo: (product: Product) => router.push({name: 'product', params: {id: product.id}}),
    showProducts,
    goBack,
    goForward, 
    searchTitle,
  }
}
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-flow: wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>