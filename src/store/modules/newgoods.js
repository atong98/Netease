import {reqNewGoods} from '../../api'
import { RECEIVE_NEWGOODS } from '../mutation-types';

const state = {
  newgoods:{}
}

const actions = {
  async getNewGoods({commit}){
    const result = await reqNewGoods()
    if(result.code===200){
      const newgoods = result.data.kingKongModule
      commit(RECEIVE_NEWGOODS,newgoods)
    }
    
  }
}

const mutations = {
  [RECEIVE_NEWGOODS](state,newgoods){
    state.newgoods = newgoods
  }
}


const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}