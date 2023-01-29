import { User } from "@/models/user";
import { Token } from "@/models/token";
import { MutationTree } from "vuex";
import { IUserState } from "./state";
import router from '@/router/index';

const mutations: MutationTree<IUserState> = {
  //mutation to add received token to state as parameter
  setToken(state: IUserState, token: string) {
    console.log("setToken", {state, token})
    state.token = token;
  },
  //mutation to add received user to state as parameter
  setUser(state: IUserState, user: User) {
    state.user = user;
  },
  //mutation set to true while request is processing
  isLoading(state: IUserState, value: boolean) {
    state.isLoading = value;
  },
  //mutation which deletes token from store
  deleteToken(state: IUserState) {
    state.token = null;
  },
}

export default mutations;