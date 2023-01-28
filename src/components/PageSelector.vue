<template>
  <nav aria-label="page naviagtion">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" @click="$emit('previous')">Go Back</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click="$emit('next')">Go Forward</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomCard',
})
</script>

<style>

a {
  width: 150px;
}

</style>