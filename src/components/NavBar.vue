<template>
  <nav>
    <div class="my-navbar">
      <h4 class="title">{{title}}</h4>
      <ul class="nav-links">
       <li><router-link class="navbar-link" to="/">Home</router-link></li>
       <li><router-link class="navbar-link" to="/products">Products</router-link></li>
       <li><router-link class="navbar-link" to="/cart">My Cart</router-link></li>
       <li> <router-link class="navbar-link" to="/sign-up">Sign Up</router-link></li>
       <li><router-link class="navbar-link" to="/login">Login</router-link></li> 
       <li><button class="logout-btn" @click="logout">Logout</button></li>
      </ul> 
    </div>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  props: {
    title: {
    type: String,
    required: true,
    }
  }, 
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({name: 'LogIn'})
    }
  }
});
</script>



<style scoped>

li {
  list-style-type: none;
}
.my-navbar {
  width: 100%;
  height: 100px;
  position:relative;
  top: 0;
  left: 0;
  right: 0;
  display: inline;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}

.navbar-link {
  text-decoration: none;
  font-weight: bold;
  color: #ff9776;
}

.navbar-link:hover {
  cursor: pointer;
}

.title {
  font-size: larger;
  font-weight: bolder;
  color: #ff487e;
}

.logout-btn {
  font-weight: bolder;
  width: 125px;
  border: 2px solid #ffedff;
  border-radius: 5px;
  background-color: #ffd5be;
  color: #ff487e;
  cursor: pointer;
}

.logout-btn:hover {
  transition: 2ms;
  background-color: #fff;
  border: 2px solid  #ffd5be;
  color: #ff9776;
  border-radius: 5px;
}

</style>
