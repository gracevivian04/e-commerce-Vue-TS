<template>
  <div>
    <NavLinks @showAll="showProducts" />
    <form @submit.prevent="validateInput">
      <div class="input-group mb-3">
        <input v-model.lazy="inputFilter" type="text" class="form-control" placeholder="Search products.." aria-label="recipient's username" aria-describedby="button-addon2" minlength="3">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
    <PageSelector @previous="goBack" @next="goForward"/>
    <div class="home">
      <div v-if="isLoading">Loading...</div>
      <div v-else class="product-list">
        <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" @productInfo="productInfo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavLinks from '@/components/NavLinks.vue';
import PageSelector from '@/components/PageSelector.vue';
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composables/useProducts';
import { useRouter } from 'vue-router';
import { Product } from '@/models/product';


export default defineComponent({
  name: 'HomeView',
  components: {
    NavLinks,
    PageSelector,
    ProductItem,
},
setup() {
  const { products, filteredProducts, isLoading, productsLength, fetchProducts, fetchProductByTitle, fetchProductByPagination } = useProducts();
  const router = useRouter();
  fetchProducts();
  let inputFilter = ref('');

  const limitProducts = 20;
  const showProducts = () => {
    fetchProductByPagination({offset: 0, limit: limitProducts});
  }
  fetchProductByPagination({offset: 0, limit: limitProducts});

  const validateInput = () => {
    const filter = inputFilter.value.toLowerCase();
    for (let i = 0; i < productsLength.value; i++) {
      if (products.value[i].title.toLowerCase().includes(filter)) {
        const titleArray =  products.value[i].title.split(" ");
        for (let j = 0; j < titleArray.length; j++) {
          if (titleArray[j].toLowerCase().includes(filter)) {
            fetchProductByTitle(titleArray[j]);
          }
        }
      }
    }
  }
  let offset = 0;
  const goBack = () => {
    if (offset == 0) {
      alert('Click Go forward to view more products')
    } else {
      offset = offset - 20;
      fetchProductByPagination({offset: offset, limit: limitProducts});
    }
  }
  const goForward = () => {
    if (offset >= productsLength.value) {
      alert('Click Go back to view products')
    } else {
      offset = offset + 20;
      fetchProductByPagination({offset: offset, limit: limitProducts});
    }
  }
  return {
    products,
    filteredProducts,
    isLoading,
    productInfo: (product: Product) => router.push({name: 'product', params: {id: product.id}}),
    inputFilter,
    validateInput,
    showProducts,
    goBack,
    goForward, 
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