<!--This component defines each product used in HomeView -->
<template>
  <div class="product-item">
    <div class="col">
      <div class="card">
        <img :src="product.images[0]" class="card-img-top" alt="product.title">
        <div class="card-body">
          <h4 class="card-title">{{ product.id }}. {{ product.title }}</h4>
          <p class="card-text">€{{ product.price }}</p>
          <a class="card-link" @click="$emit('productInfo', product)">Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//import { Product } from '@/models/product';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  margin-top: 20px;
  margin-left: 20px;
  width: 325px;
}

.card-link {
  color: #ff9776;
  font-weight: bold;
  text-decoration: none;
}

.card-link:hover {
  cursor: pointer;
  color: #ff487e;
}

</style>