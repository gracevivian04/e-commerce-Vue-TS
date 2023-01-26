<template>
  <div class="product">
    <ProductPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductPage from '@/components/ProductPage.vue';
import fakeShopApi from '@/api/fakeShopApi';


export default defineComponent({
  name: 'ProductView',
  components: {
    ProductPage,
  },
  setup() {
    fakeShopApi.get('/products').then((resp) => {
      console.log(resp.data[0]);
    });
    return{};
  },
});
</script>