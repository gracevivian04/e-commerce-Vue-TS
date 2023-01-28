<!--This component defines each product used in HomeView -->
<template>
  <div class="product-item">
    <div class="col">
      <div class="card">
        <img :src="product.images[0]" class="card-img-top" alt="product.title">
        <div class="card-body">
          <h4 class="card-title">{{ product.id }}. {{ product.title }}</h4>
          <p class="card-text">€{{ product.price }}</p>
          <a class="card-link" @click="$emit('goToDetails', product)">Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/models/product';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    }
  },
})
</script>

<style scoped>

.product-item {
  margin-top: 20px;
  margin-left: 20px;
  width: 285px;
  display: flex;
}

</style>