import { RECEIVE_SEARCH ,RECEIVE_SEARCHKAY,RECEIVE_SEARCHHOT} from '../mutation-types'
import {reqKeywordSearch,reqKeyword,reqHotKeyword} from '../../api'

const state = {
  search:[],
  placeholder:{},
  hotword:[]
}
const mutations = {
  [RECEIVE_SEARCH](state,search){
    state.search = search
  },
  [RECEIVE_SEARCHKAY](state,placeholder){
    state.placeholder = placeholder
  },
  [RECEIVE_SEARCHHOT](state,hotword){
    state.hotword = hotword
  }
}
const actions = {
  //获取当前关键字的异步action
  async getKeywordSearch({commit},info){
    const result = await reqKeywordSearch(info)
    console.log(result)
    if(result.code==='200'){
      const search = result.data
      // console.log(search)
      commit(RECEIVE_SEARCH,search)
    }
    
  },
  //获取页面默认显示
  async getKeyword({commit}){
    const result = await reqKeyword()
    if(result.code==='200'){
      console.log(result)
      const placeholder = result.data.defaultKeyword
      commit(RECEIVE_SEARCHKAY,placeholder)
    }
  },

  //获取热门热搜词
  async getHotKeyword({commit}){
    const result = await reqHotKeyword()
    if(result.code==='200'){
      const hotword = result.data.hotKeywordVOList
      commit(RECEIVE_SEARCHHOT,hotword)
    }
  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}  