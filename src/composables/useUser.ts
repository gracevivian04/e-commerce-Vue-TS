import { UserRequest } from "@/models/userRequest";
import { computed } from "vue";
import { useStore } from "vuex";

const useUser = () => {
  const store = useStore(); //access store to use getters / actions

  return {
    //GETTERS
    token: computed(() => store.getters['user/getToken']),
    user: computed(() => store.getters['user/getuser']),
    isLoading: computed(() => store.getters['user/getIsLoading']),

    //ACTIONS
    fetchToken: (data: UserRequest) => store.dispatch('user/fetchToken', data),
    fetchuser: () => store.dispatch('user/fetchuser'),
    deleteToken: () => store.dispatch('user/deleteToken')
  }
};

export default useUser;