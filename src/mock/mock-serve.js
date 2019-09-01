import Mock from 'mockjs'
/* 首页 */
import home from './data.json'
/* 分类 */
import classify from './classify.json'


Mock.mock('/homenewgoods',{code:200,data:home })

Mock.mock('/categorylist',{code:'200',data:classify})

// Mock.mock('/categorylistright',{code:200,data:classify})