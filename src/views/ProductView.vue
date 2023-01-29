<!--View shows NavLink components and CustomCard to show selected product detail-->
<template>
  <NavLinks />
  <div>
    <div v-if="!isLoading" class="product">
    <div class="images">
      <div v-if="!currentPic" class="profile">
        <div class="current-image">
          <img :src="product.images[0]" alt="" class="card-img-top" />
        </div>
      </div>
      <div v-else>
        <div class="current-image">
          <img :src="currentPic" alt="" class="card-img-top" />
        </div>
      </div>
      <div class="other-images">
        <div v-for="(image, index) in product.images" :key="index">
          <img :src="image" class="image" @click="changeCurrentPic(index)" />
        </div>
      </div>
    </div>
    <div class="info">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <h5>€{{ product.price }}</h5>
    </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useProducts from '@/composables/useProducts';
import NavLinks from '@/components/NavLinks.vue';


export default defineComponent({
    name: "ProductView",
    components: {
    NavLinks
},
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
       const {product, fetchProductById, isLoading} = useProducts();
       fetchProductById(props.id);

       let currentPic = ref();
       const changeCurrentPic = (index: number) => {
        currentPic.value = product.value.images[index];
       };

       return {
        product, 
        isLoading,
        currentPic, 
        changeCurrentPic,
       };
    },
});
</script>

<style scoped>
.product {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
}

.images {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.image {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.current-image {
  width: 100%;
}

.current-image img {
  max-width: 100%;
}

.other-images {
  display: flex;
  width: 100%;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
}
</style>