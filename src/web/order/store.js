import { getOrders } from './action.js'
// import { SET_ORDER } from '../mutation-types'
import { GET_ORDER } from '../mutation-types'

export const state = {
  order: null
}

export const actionTypes = {
  // GET_ORDER: 'order/GET_ORDER',
  SET_ORDER: "order/SET_ORDER"
}

export const mutations = {
  [actionTypes.SET_ORDER](state, order) {
    state.order = order
  }
}


export const actions = {
  async [GET_ORDER]({commit}, id) {
    let order = await getOrders();
    commit(actionTypes.SET_ORDER, order)
  }
}

