import state, { IUserState } from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import { Module } from 'vuex';
import { IState } from '../index'

const userModule: Module<IUserState, IState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}

export default userModule;