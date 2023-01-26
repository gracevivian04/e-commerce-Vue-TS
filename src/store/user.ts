import { computed, reactive } from "vue";
import fakeShopApi from "@/api/fakeShopApi";

const state = reactive({
  name: '',
  email: '',


  error: '',
})

const getters = reactive({
  isLoggedIn: computed(() => state.email !== '')
})

/*const actions = {
  //async getUser() {
    //const user = await fakeShopApi('/auth/login').getUser()
    //if(user == null) return
    
      //state.name = user.name
      //state.email = user.email
  }
}*/
