import {reqCategoryList, reqCategoryListRight} from '../../api'
import {RECEIVE_CATEGORYLIST, RECEIVE_CATEGORYLISTRIGHT} from '../mutation-types'

const state = {
  classify:[],
  categoryright:[]
}

const actions = {
  /* 列表左侧 */
  async getCategoryList({commit}){
    const result = await reqCategoryList()
    // console.log(result)
    if(result.code==='200'){
      console.log(111)
      const classify = result.data.categoryL1List
      commit(RECEIVE_CATEGORYLIST,classify)
    }
  },
  /* 列表右侧 */
  async getCategoryListRight({commit}){
    const result = await reqCategoryList()
    console.log(result)
    if(result.code==='200'){
      const categoryright = result.data.categoryL2List
      commit(RECEIVE_CATEGORYLISTRIGHT,categoryright)
    }
  }
}

const mutations = {
  [RECEIVE_CATEGORYLIST](state,classify){
    state.classify = classify
  },
  [RECEIVE_CATEGORYLISTRIGHT](state,categoryright){
    state.categoryright = categoryright
  }
}

const getters ={}

export default {
  state,
  mutations,
  actions,
  getters
}