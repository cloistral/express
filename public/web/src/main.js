import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import http from './lib/http'
Vue.use(http)
import NorthHeader from '@/components/NorthHeader'
Vue.component('north-header', NorthHeader)
import NorthView from '@/components/NorthView'
Vue.component('north-view', NorthView)

import NorthChildView from '@/components/NorthChildView'
Vue.component('north-child-view', NorthChildView)

import { DatePicker } from 'cube-ui'
Vue.use(DatePicker)

import Modal from './services/modal/Modal'
import createAPI from './services/create/index'
createAPI(Vue, Modal, ['click'], false)

import util from './util/util'
Vue.prototype.$util = util

Vue.config.productionTip = false
new Vue({
    router,
    render: (h) => h(App),
    methods: {
        initDialog(...param) {
            let paramObj = param[0]
            this.$createDialog({
                type: paramObj.type || 'alert',
                title: paramObj.title || '提示',
                content: paramObj.content || '提示内容',
                showClose: paramObj.showClose || false,
                icon: paramObj.icon || '',
                confirmBtn: paramObj.confirmBtn || '确定',
                cancelBtn: paramObj.cancelBtn || '取消',
                maskClosable: paramObj.maskClosable || true,
                zIndex: paramObj.zIndex || 999,
                onConfirm: () => {
                    if (paramObj.confirm) {
                        paramObj.confirm()
                    }
                },
                onCancel: () => {
                    if (paramObj.cancel) {
                        paramObj.cancel()
                    }
                }
            }).show()
        },
        initToast(...param) {
            let obj = param[0]; let toastObj = {};
            if (typeof obj == 'string') {
                toastObj.txt = obj
            } else if (typeof obj == 'object' && obj.constructor != Array) {
                toastObj = obj
            } else {
                return null;
            }
            let toast = this.$createToast({
                type: toastObj.type || 'txt',
                mask: toastObj.mask || false,
                txt: toastObj.txt || '提示信息',
                time: toastObj.time || 3000,
                maskClosable: toastObj.maskClosable || false,
                zIndex: toastObj.zIndex || 100,
                onTimeout: () => {
                    if (toastObj.timeout) {
                        toastObj.timeout()
                    }
                },
            })
            toast.show()
        }
    }
}).$mount('#app')
