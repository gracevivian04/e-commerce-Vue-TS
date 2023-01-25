<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp"> Sign Up </button>
    <p>
      <router-link to="/login" class="login">Login</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
//import HomePage from './HomePage.vue'


export default defineComponent({
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async signUp() {
      //console.warn('signup', this.name, this.email, this.password)
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.warn(result);
      if(result.status == 201) {
        alert("sign-up successful");
        localStorage.setItem("user-info", JSON.stringify(result.data))
        //this.$router.push({name: HomePage})
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(user) {
      this.$router.push({name:'HomePage'})
    }
  }
})
</script>

<style scoped>
.register input {
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
.register button {
  font-weight: bolder;
  width: 325px;
  height: 40px;
  border: 2px solid #ffedff;
  border-radius: 5px;
  background-color: #ffd5be;
  color: #ff487e;
  cursor: pointer;
}
.register button:hover {
  transition: 2ms;
  background-color: #ffedff;
  border: 2px solid  #ffd5be;
  color: #ff9776;
  border-radius: 5px;
}

.login {
  font-weight: bold;
  text-decoration: none;
  color:#ff9776;
}

.login:hover {
  color: #ff487e;
}
</style>