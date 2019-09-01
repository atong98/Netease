import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import search from './modules/search'
import newgoods from './modules/newgoods'
import classify from './modules/classify'

Vue.use(Vuex)

export default new Vuex.Store({
  
  mutations,
  actions,
  getters,
  modules:{
    search,
    newgoods,
    classify
  }
})


