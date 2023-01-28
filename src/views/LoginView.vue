<template>
  <div class="login">
    <h1 class="title">Store Access</h1>
    <form class="form" @submit.prevent="getToken">
      <div class="mb-3">
        <label for="exampleEmail1" class="form-label">Email Address</label>
        <input v-model.lazy="email" type="email" class="form-control" id="exampleEmail1" aria-describedby="emailHelp" required>
        <div id="emailHelp" class="form-text">Please use a valid email</div>
      </div>
      <div class="mb-3">
        <label for="examplePassword1" class="form-label">Password</label>
        <input v-model.lazy="password" type="password" class="form-control" id="examplePassword1" required>
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useAuthUser  from '@/composables/useAuthuser';


export default defineComponent({
  setup() {
    const { fetchToken } = useAuthUser();
    let email = ref("");
    let password = ref("");
    const getToken = () => {
      fetchToken({email: email.value, password: password.value});
    }
    return {
      email, 
      password, 
      getToken,
    }
  }
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

button {
  border:#ff487e;
  background: #ff9776;
}

</style>
