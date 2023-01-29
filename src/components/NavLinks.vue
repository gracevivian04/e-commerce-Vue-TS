<template>
  <div>
    <nav>
      <div>
        <ul>
          <li>
            <router-link to="/" @click="showProducts">Products</router-link>
          </li>
          <li>
            <router-link :to="{name: 'login'}">Login</router-link>
          </li>
          <li>
            <router-link :to="{name: 'my-account'}">My Account</router-link>
          </li>
        </ul>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="logout" width="16" height="16" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUser from "../composables/useUser";

export default defineComponent({
  setup(props, { emit }) {
    const showProducts = () => {
      emit("showAll")
    }

    const { deleteToken } = useUser();
    const logout = () => {
      deleteToken();
    }

    return {
      showProducts,
      logout,
    }
  },
});
</script>

<style scoped>
nav {
  height: 50px;
  background-color: #ff487e;
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  padding: 1rem;
  font-weight: bold;
}

a {
  color: #fee0d7;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  color: #ff9776;
}

svg {
  width: 30px;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
}

svg:hover {
  cursor: pointer;
}
</style>