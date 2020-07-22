import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    landingPage: true
  },
  getters: {
    isLandingPage: (state) => state.landingPage
  },
  mutations: {
    SET_LANDING_PAGE: (state, payload) => {
      state.landingPage = payload
    }
  },
  actions: {},
  modules: {}
})
