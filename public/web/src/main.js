import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import http from './lib/http'

Vue.use(http)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
