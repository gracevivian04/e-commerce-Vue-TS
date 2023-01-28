import { Module } from "vuex";
import { IState } from "../index";
import state, { ProductStateInterface } from './state';
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const productsModule: Module<ProductStateInterface, IState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}

export default productsModule;