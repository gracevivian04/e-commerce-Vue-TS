<template>
  <div class="home-page">
    <h1>Available Products</h1>
    <form class="form">
      <input class="search-bar" type="search" placeholder="Search for an item..." aria-label="search">
      <button class="btn-success" type="submit">Search</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductPage',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form input {
  width: 500px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #ffedff;
  border-radius: 5px;
}
.form button {
  font-weight: bolder;
  width: 125px;
  height: 40px;
  border: 2px solid #ffedff;
  border-radius: 5px;
  background-color: #ffd5be;
  color: #ff487e;
  cursor: pointer;
}
.form button:hover {
  transition: 2ms;
  background-color: #fff;
  border: 2px solid  #ffd5be;
  color: #ff9776;
  border-radius: 5px;
}

.search-bar {
  border: 2px solid #ffedff;
}

.search-bar input[type="search"]:focus {
  border: 2px solid  #ffd5be;
}
</style>