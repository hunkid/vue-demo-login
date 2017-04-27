import Vue from 'vue'

export const USR_SIGNOUT = 'USR_SIGNOUT'
export const USR_SIGNIN = 'USR_SIGNIN'

export default {
  state: JSON.parse(sessionStorage.getItem('usr')) || {},
  mutations: {
    [USR_SIGNIN] (state, usr) {
      sessionStorage.setItem('user', JSON.stringify(usr))
      Object.assign(state, usr)  // 是以此index中的module中的属性名作为属性名放入state中的
    },
    [USR_SIGNOUT] (state) {
      sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USR_SIGNIN] ({commit}, usr) {
      commit(USR_SIGNIN, usr)
    },
    [USR_SIGNOUT] ({commit}) {
      commit(USR_SIGNOUT)
    }
  }
}
