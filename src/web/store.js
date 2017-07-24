import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types.js'
import * as order from './order/store.js'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  [SOME_MUTATION](state) {
    state.count++
  }
}

const actions = {
  async [SOME_MUTATION]({commit}) {
    commit('SOME_MUTATION')
  }
}


const store = new Vuex.Store({
  modules: {
    order
  },
  state,
  mutations,
  actions
})

export default store

