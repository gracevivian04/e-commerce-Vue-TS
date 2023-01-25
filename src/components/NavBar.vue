<template>
  <nav>
    <div class="my-navbar">
      <h4 class="title">{{title}}</h4>
      <ul class="nav-links">
       <li><router-link class="navbar-link" to="/">Home</router-link></li>
       <li><router-link class="navbar-link" to="/add">Products</router-link></li>
       <li><router-link class="navbar-link" to="/cart">Cart</router-link></li>
       <li> <router-link class="navbar-link" to="/sign-up">Sign Up</router-link></li>
       <li><router-link class="navbar-link" to="/login">Login</router-link></li> 
       <li><button class="logout-btn">Logout</button></li>
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
  background-color: #ffedff;
  position: fixed;
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
 color: #ff9776;
 background-color: #fff;
 border-radius: 4px;
 font-weight: bold;
 padding: 2px;
}

.logout-btn:hover {
  cursor: pointer;
  color: #fff;
  background-color: #ff9776;
}

</style>
