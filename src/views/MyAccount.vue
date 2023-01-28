
import CustomCard from '@/components/CustomCard.vue';

<template>
  <div>
    <NavLinks />
    <div v-if="!isLoading" class="my-account">
      <CustomCard>
        <template v-slot:image>
          <div class="pictures"><img :src="authUser.avatar" class="card-img-top" alt=""></div>
        </template>
        <template v-slot:header>
          <div class="card-title">{{ authUser.name }}</div>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ authUser.email }}</p>
        </template>
        <template v-slot:footer>
          <h4>Role:{{ authUser.role }}</h4>
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
import useAuthUser from '@/composables/useAuthuser';

export default defineComponent({
  name: "MyAccount",
  components: {
    NavLinks,
    CustomCard,
  },
  setup() {
    const { authUser, isLoading, fetchAuthUser } = useAuthUser();
    fetchAuthUser();

    return {
      authUser, 
      isLoading,
      fetchAuthUser,
    }
  },
});

</script>

<style scoped>
.my-account {
  margin-top: -40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

</style>