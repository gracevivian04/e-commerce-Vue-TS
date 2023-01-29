import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import haveRoleGuard from './role-guard'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    //beforeEnter: [haveRoleGuard],
    component: HomeView
  },
  {
    path: '/my-account',
    name: 'my-account',
    //beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "my-account" */ '../views/MyAccount.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    //beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "produxt" */ '../views/ProductView.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
