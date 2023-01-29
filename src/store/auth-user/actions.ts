import fakeShopApi from "@/api/fakeShopApi";
import { User } from "@/models/user";
import { UserRequest } from "@/models/userRequest";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IUserState } from "./state";
import { IState } from '../index';
import router from "@/router";

const actions: ActionTree<IUserState, IState > = {
  async checkToken({ commit }) {
    const token = localStorage.getItem("token");
    commit("setToken", token);
  },
  //action that calls API to access token. If user is unauthorized, error 401 is shown. If credentials are correct, will use mutations to save token 
  async fetchToken({commit}, body: UserRequest) {
    try {
      const { data } = await fakeShopApi.post('/auth/login', body);
      commit('setToken', data.access_token);
      localStorage.setItem('token', data.access_token);
      router.push({name: 'home'});
    } catch(error: any) {
      console.error(error.message)
      alert('401 Unauthorized user');
    }
  },
  //action that calls API to access authorized user 
  async fetchUser({ commit }, token: string) {
    commit('setIsLoading', true);
    console.log('fetchUser', { token });
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User>>('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    commit('setIsLoading', false);
    commit('setuser', data);
    localStorage.setItem("name", data.name);
  },
  //action that uses mutations to delete token from store + localStorage then redirect to login 
  deleteToken({ commit }) {
    commit('deleteToken');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    router.push({name: 'login'});
  },
};

export default actions;