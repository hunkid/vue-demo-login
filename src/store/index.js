import Vue from 'vue'
import Vuex from 'vuex'
import usr from './usr'
import loginWay from './loginWay'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usr,
    loginWay
  }
})
