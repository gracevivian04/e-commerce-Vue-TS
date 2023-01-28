<!--Component slots for user and product use-->
<template>
  <div class="card">
      <slot name="image"></slot>
      <div class="card-body">
          <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";
    export default defineComponent({
        name: 'CustomCard'
    });
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  min-height: 300px;
  width: 40%;
  margin: 1rem auto;
  border: 1px solid #ff9776;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.2) ;
  padding: 1rem;
  overflow: hidden;
  background-color: #ffffff;
}
</style>