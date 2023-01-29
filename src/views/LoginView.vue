<template>
  <div class="login">
    <h1 class="title">Store Access</h1>
    <form class="form" @submit="getToken">
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input v-model="email" type="email" class="form-control" id="email" required>
        <div id="emailHelp" class="form-text">Please use a valid email</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" required>
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
    <!--<div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import router from '@/router';
import useUser from '@/composables/useUser';


export default defineComponent({
  /*setup() {
    const { fetchToken } = useUser();
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");

    async function onSubmit() {
      if(email.value && password.value) {
        try {
          fetchToken({email: email.value, password: password.value});
          router.push('/');
        } catch (error) {
          errorMsg.value = "The email or password is incorrect, please try again."
        }
      }
    }
    return {
      email, 
      password, 
      errorMsg,
      onSubmit,
    };
  },*/
  setup() {
    const { fetchToken } = useUser();
    let email = ref("");
    let password = ref("");
    const getToken = () => {
      console.log("getToken", {email: email.value, password: password.value});
      fetchToken({email: email.value, password: password.value});
    };
    return {
      email, 
      password, 
      getToken,
    };
  },
});
</script>

<style scoped>
.title {
  margin: 2rem;
  text-align: center;
  color: #ff487e;
}

.form {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  min-width: 350px;
  max-width: 100%;
  background-color: #fee0d7;
  border-radius: 5px;
  padding: 30px;
  border: 1px solid #ff9776;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.3);
}

.form-text {
  color:#ff9776;
  font-weight: bold;
}

button {
  border:#ff487e;
  background: #ff9776;
}

button:hover {
  background: #ff487e;
}

</style>
