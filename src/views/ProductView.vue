<!--View shows NavLink components and CustomCard to show selected product detail-->

<template>
  <div class="product">
    <NavLinks />
    <h1>Available Products</h1>
    <form class="form">
      <input class="search-bar" type="search" placeholder="Search for an item..." aria-label="search" />
      <button class="btn-success" type="submit">Search</button>
    </form>
    <div v-if="!isLoading" class="product-view">
      <CustomCard>
        <template v-slot:image>
          <div v-if="!activePic" class="profile">
            <div class="pictures">
              <img :src="product.images[0]" class="card-img-top" alt="">
            </div>
            <div class="pictures">
              <div v-for="(image, index) in product.images" :key="index">
                <img :src=image class="card-img-top" @click="changeActivePic(index)">
              </div>
            </div>
          </div>
        </template>
        <template v-slot:header>
          <h2 class="card-title">{{ product.id }}.{{ product.title }}</h2>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ product.description }}</p>
        </template>
        <template v-slot:footer>
          <h2>Price: €{{ product.price }}</h2>
        </template>
      </CustomCard>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted } from 'vue';
import useProducts from '@/composables/useProducts';
import NavLinks from '@/components/NavLinks.vue';
import CustomCard from '@/components/CustomCard.vue';


export default defineComponent({
    name: "ProductView",
    components: {
      NavLinks,
      CustomCard,
    },
    props: {
      id: {
        type: Number,
        required: true,
      }
    },
    setup(props) {
       const {product, fetchProductById, isLoading} = useProducts();
       fetchProductById(props.id);
       let activePic = ref();
       const changeActivePic = (index: number) => {
        activePic.value = product.value.images[index];
       }

       return {
        product, 
        isLoading,
        activePic, 
        changeActivePic
       }
    }
});
</script>

<style scoped>
.product-view {
  margin-top: -40px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.pictures {
  width: 800px;
  display: flex;
}

.pictures img {
  width: 150px;
  margin: 5px;
  border: 2px solid  #ffd5be;
  border-radius: 5px;
}
.search-bar {
  border: 2px solid #ffedff;
}

.search-bar input[type="search"]:focus {
  border: 2px solid  #ffd5be;
}
</style>