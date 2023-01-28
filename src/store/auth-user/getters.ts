import { GetterTree } from "vuex";
import { IUserState } from "./state";
import { IState } from '../index';

const getters: GetterTree<IUserState, IState> = {
  //define user getters 
  getToken(state) {
    return state.token;
  },
  getUser(state) {
    return state.user;
  },
  getIsLoading(state) {
    return state.isLoading;
  }
};

export default getters;