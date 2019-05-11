import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

import axios from 'axios'

Vue.prototype.axios = axios

Vue.filter('setWH', (url, arg)=>{
  return url.replace(/w\.h/, arg)
})

import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
