import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import http from './lib/http'
Vue.use(http)
import NorthHeader from '@/components/NorthHeader'
Vue.component('north-header', NorthHeader)
import NorthChildView from '@/components/NorthChildView'
Vue.component('north-child-view', NorthChildView)
import {DatePicker} from 'cube-ui'
Vue.use(DatePicker)

import Modal from './services/modal/Modal'
import createAPI from './services/create/index'
createAPI(Vue, Modal, ['click'], false)

import util from './util/util'
Vue.prototype.$util = util

Vue.config.productionTip = false
new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
