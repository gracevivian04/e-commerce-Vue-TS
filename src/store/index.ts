import { createStore } from 'vuex';
import userModule from './auth-user';
import productsModule from './products';

//define state
export interface IState {
  greeting: string;
}

export default createStore({
  state: {
    greeting: 'Welcome to the Online Shop'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsModule,
    user: userModule,
  }
})
