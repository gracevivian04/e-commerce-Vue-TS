import fakeShopApi from "@/api/fakeShopApi";
import { Pagination } from "@/models/pagination";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "../index";
import { ProductStateInterface } from './state' ;

const actions: ActionTree<ProductStateInterface, IState> = {
  //action that calls API to access all products
  async fetchProducts({commit}) {
    commit('setIsLoading', true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>('/products');
    commit('setIsLoading', false);
    commit('setProducts', data);
  },
  //action that calls API to access 1 product according to its ID 
  async fetchProductById({commit}, productId: number) {
    commit('setIsLoading', true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);
    commit('setIsLoading', false);
    commit('setSelectedProduct', data);
  },
  //action that calls API to access products that have specific word in their title 
  async fetchProductByTitle({commit}, productTitle: string) {
    commit('setIsLoading', true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productTitle}`);
    commit('setIsLoading', false);
    commit('setFilteredProducts', data);
  },
  //actions that calls API to access all products according to offset and limit 
  async fetchProductByPagination({commit}, pagination: Pagination) {
    commit('setIsLoading', true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${pagination}`);
    commit('setIsLoading', false);
    commit('setFilteredProducts', data);
  },
}

export default actions;