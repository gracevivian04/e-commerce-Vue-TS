<template>
  <nav>
    <div class="my-navbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
        <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
      </svg>
      <h4 class="title">{{title}}</h4>
    </div>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

/*interface NavbarProps {
  title: string,
}*/

export default defineComponent({
  name: 'NavBar',
  props: {
    title: {
    type: String,
    required: true,
    }
  }, 
});
</script>


<style scoped>
.my-navbar {
  width: 100%;
  height: 60px;
  right: -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fee0d7;
}
.title {
  font-size: larger;
  font-weight: bolder;
  color: #ff487e;
}

h4 {
  padding: 0 20px;
}

</style>
