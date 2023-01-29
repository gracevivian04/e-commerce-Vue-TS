<template>
   <NavLinks />
  <div>
    <div class="welcome"><h1>Welcome back, {{ user.name }}!</h1></div>
    <div v-if="!isLoading" class="my-account">
      <CustomCard>
        <template v-slot:image>
          <div class="pictures"><img :src="user.avatar" class="card-img-top" alt=""></div>
        </template>
        <template v-slot:header>
          <div class="card-title">{{ user.name }}</div>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ user.email }}</p>
        </template>
        <template v-slot:footer>
          <h4>Role:{{ user.role }}</h4>
        </template>
      </CustomCard>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavLinks from '@/components/NavLinks.vue';
import CustomCard from '@/components/CustomCard.vue';
import useUser from '@/composables/useUser';

export default defineComponent({
  name: "MyAccount",
  components: {
    NavLinks,
    CustomCard,
  },
  setup() {
    const { user, isLoading, fetchuser } = useUser();
    fetchuser();

    return {
      user, 
      isLoading,
      fetchuser,
    }
  },
});

</script>

<style scoped>
.title {
  font-weight: bold;
  color: #ff487e;
}
.my-account {
  margin-top: -40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

</style>