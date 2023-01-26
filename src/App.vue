<template>
  <NavBar title="Online Shop" />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
//import fakeShopApi from './api/fakeShopApi';

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
