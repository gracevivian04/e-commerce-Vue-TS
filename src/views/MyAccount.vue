<template>
  <div class="my-account">
    <div v-if="user">
      <h1>Welcome back, {{ user.name }}</h1>
      <img :src="user.avatar">
      <h4>{{ user.email }}</h4>
      <h4>{{ user.role }}</h4>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import fakeShopApi from '@/api/fakeShopApi';
import { User } from '@/models/user';


export default defineComponent({
  name: 'MyAccount',
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String
  },
  setup(props) {
    let user = ref<User>();
    fakeShopApi.get<unknown, AxiosResponse<User>>(`/users/${props.id}`).then((resp) => user.value = resp.data);
    return {user};
  }
});
</script>