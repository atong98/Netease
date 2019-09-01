import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Goods from '../pages/Goods/Goods.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history', //没有#
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        showFooter:true
      }         
    },
    {
      path:'/goods',
      component:Goods,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shopping',
      component:Shopping,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/login/:id',
      component:Login
    }
  ]
})