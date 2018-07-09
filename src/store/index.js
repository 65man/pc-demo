
// import Vue from 'vue'
// import Vuex from 'vuex'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

// Vue.use(Vuex)

// const state = {
//   count: 0
// }
// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}

const actions = {
  increment (context) {
    context.commit('increment')
  },
  decrement (context) {
    context.commit('decrement')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
