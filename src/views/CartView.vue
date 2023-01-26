<template>
  <div class="cart">
    <div v-if="user">
      <h1>Welcome back {{ user.name }}</h1>
    </div>
    <div v-else>
      Loading...
    </div>
    <CartItem />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CartItem from '@/components/CartItem.vue';
import { User } from '@/models/user';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';


export default defineComponent({
  name: 'CartView',
  components: {
    CartItem,
  },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    let user = ref<User>();
    fakeShopApi.get<unknown, AxiosResponse<User>>(`/users/${props.id}`).then((resp) => user.value = resp.data);
    return {user};
  },
});
</script>