
// import Vue from 'vue'
// import Vuex from 'vuex'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

// Vue.use(Vuex)

// const state = {
//   userName: 0
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
  userName: '111'
}

const getters = {
  getUserName: state => state.userName
}
const mutations = {
  // increment: state => state.userName++,
  // decrement: state => state.userName--
}

const actions = {
  // increment (context) {
  //   context.commit('increment')
  // },
  // decrement (context) {
  //   context.commit('decrement')
  // }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
