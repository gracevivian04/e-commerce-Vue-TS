<template>
  <h1 class="title">Login Page</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up" class="sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
//import HomePage from './HomePage.vue';

export default defineComponent({
  name: "LogIn",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
      
      if(result.status == 200 && result.data.length > 0) {
        alert("login successful");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]))
        //this.$router.push({name: HomePage})
      }
      console.log(result);
    }
  }
});
</script>


<style scoped>
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #ffedff;
  border-radius: 5px;
}
.login button {
  font-weight: bolder;
  width: 325px;
  height: 40px;
  border: 2px solid #ffedff;
  border-radius: 5px;
  background-color: #ffd5be;
  color: #ff487e;
  cursor: pointer;
}
.login button:hover {
  transition: 2ms;
  background-color: #ffedff;
  border: 2px solid  #ffd5be;
  color: #ff9776;
  border-radius: 5px;
}

.sign-up {
  font-weight: bold;
  text-decoration: none;
  color:#ff9776;
}

.sign-up:hover {
  color: #ff487e;
}
</style>