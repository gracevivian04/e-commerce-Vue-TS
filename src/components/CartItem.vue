<template>
  <div class="cart">
    <div class="cart-header">
      <h1>My Cart</h1>
    </div>
    <div class="cart-items">
      <ul>
        <li>
          <div class="item-name">

          </div>
          <div class="actions">
            <button @click="removeItemFromCart(item)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <button @click="toggleCart">Buy</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const 
  }
})
</script>