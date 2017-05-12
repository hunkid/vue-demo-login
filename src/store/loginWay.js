export default {
  state: {
    loginWay: 'login'
  },
  mutations: {
    changeLoginWay (state, way) {
      if (way === 'register') {
        state.loginWay = way
      } else {
        state.loginWay = 'login'
      }
    }
  },
  actions: {
    changeLoginWay ({commit}, way) {
      commit('changeLoginWay', way)
    }
  }
}
