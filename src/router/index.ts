import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    store.commit('SET_LANDING_PAGE', true)
  } else {
    store.commit('SET_LANDING_PAGE', false)
  }
  next()
})

export default router
