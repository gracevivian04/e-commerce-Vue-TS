<template>
  <div class="home-page">
    <h1>Welcome!</h1>
    <router-link to="/login"><button class="button">Login</button></router-link>
    <router-link to="/products"><button class="button">Browse Products</button></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  font-weight: bolder;
  width: 325px;
  height: 40px;
  border: 2px solid #ffedff;
  border-radius: 5px;
  background-color: #ffd5be;
  color: #ff487e;
  cursor: pointer;
}
.button:hover {
  transition: 2ms;
  background-color: #fff;
  border: 2px solid  #ffd5be;
  color: #ff9776;
  border-radius: 5px;
}
</style>
