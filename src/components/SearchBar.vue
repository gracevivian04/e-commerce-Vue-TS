<template>
  <div class="search-bar">
    <form @submit.prevent="onSubmit">
      <div class="input-group mb-3">
        <input v-model="searchbar" type="text" class="form-control" placeholder="Search for an item..."  aria-describedby="button-addon2" minlength="3" required>
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
  </div>
</template>

<script lang=ts>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    const searchbar = ref("");
    const errorMsg = ref("");

    async function onSubmit() {
      if (searchbar.value.length >= 3) {
        emit("search-title", searchbar.value);
      } else {
        errorMsg.value = "You must enter at leat 3 characters to search";
      }
    }
    return {
      searchbar,
      errorMsg, 
      onSubmit,
    };
  },
});
</script>

<style scoped>
form {
  margin: 10px 0;
  width: 60%;
  display: inline-block;
}
.form-control {
  border: 1px solid #ff9776;
}

.form-control:hover {
  border: 1px solid #ff487e;
}
input:focus, input.form-control:focus {

outline:none !important;
outline-width: 0 !important;
box-shadow: none;
-moz-box-shadow: none;
-webkit-box-shadow: none;
}

button {
  border:#ff487e;
  background: #ff9776;
}

button:hover {
  background: #ff487e;
}
</style>