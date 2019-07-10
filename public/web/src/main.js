import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import http from './lib/http'

import NorthHeader from '@/components/NorthHeader'
Vue.component('north-header',NorthHeader)

import './services/modal/index'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
