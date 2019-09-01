import ajax from './ajax'
const BASE = '/api'

/* 关键字搜索接口 */
export const reqKeywordSearch = (keywordPrefix) =>ajax({
  method:'GET',
  url:BASE + `/xhr/search/searchAutoComplete.json?keywordPrefix=${keywordPrefix}`
})

/* 搜索页面默认显示keyword && hotkeyword接口 */
export const reqKeyword = () =>ajax(BASE + '/xhr/search/init.json')


export const reqHotKeyword = () =>ajax(BASE + '/xhr/search/init.json')

/* 测试一下 */
// reqKeywordSearch('a').then(result =>{
// })

/* 首页新品首发 */
export const reqNewGoods = () =>ajax('/homenewgoods')

/* 分类列表 */
export const reqCategoryList = () =>ajax('/categorylist')

// export const reqCategoryListRight = () =>ajax('/categorylistright')



