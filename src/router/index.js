import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Goods from '../pages/Goods/Goods.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/goods',
      component:Goods
    },
    {
      path:'/shopping',
      component:Shopping
    },
    {
      path:'/personal',
      component:Personal
    }
  ]
})