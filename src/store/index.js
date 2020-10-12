import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    student: []
  },
  mutations: {
    addStudent(state, payload) {
      state.student = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
