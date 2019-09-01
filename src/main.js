import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import './api'
import './mock/mock-serve'
import './validate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
