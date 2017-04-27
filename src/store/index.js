import Vue from 'vue'
import Vuex from 'vuex'
import usr from './usr'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usr
  }
})
