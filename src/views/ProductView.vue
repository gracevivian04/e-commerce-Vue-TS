<template>
  <div class="product">
    <ProductPage />
  </div>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <h2>{{ product.price }}</h2>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductPage from '@/components/ProductPage.vue';
import fakeShopApi from '@/api/fakeShopApi';
import { Product } from '@/models/products';
import { AxiosResponse } from 'axios';


export default defineComponent({
  name: 'ProductView',
  components: {
    ProductPage,
  },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    let product = ref<Product>();
    fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${props.id}`).then((resp) => product.value = resp.data);
    return {product};
  },
  /*setup() {
    fakeShopApi.get('/products').then((resp) => {
      console.log(resp.data[0]);
    });
    return{};
  },*/
});
</script>