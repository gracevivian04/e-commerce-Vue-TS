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
    <PageSelector @previous="showPrevious" @next="showNext"/>
    <div class="home">
      <div v-if="isLoading">Loading...</div>
      <div v-else class="product-list">
        <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from '@/components/HomePage.vue';
import NavLinks from '@/components/NavLinks.vue';
import PageSelector from '@/components/PageSelector.vue';
import ProductItem from '@/components/ProductItem.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    HomePage,
    NavLinks,
    PageSelector,
    ProductItem
},
});
</script>
