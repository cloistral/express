
import axios from 'axios'

import Vue from 'vue'
import {Toast} from 'cube-ui'
Vue.use(Toast)
let initToast = (text) => {
    let toast = Toast.$create({
        mask : true,
        time : 2000,
        type: 'txt',
        txt : text || '请求错误了!'
    })
    toast.show()
}



const Axios = axios.create({ timeout: 10000 })
Axios.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
}, error => {
    return Promise.reject(error);
})


Axios.interceptors.response.use(response => {
    console.log('aaaaaaaaa',response)
    return response.data
}, error => {
    let response = error.response
    if (response.status === 401) {
        // 401 说明 token 验证失败
    }else if(response.status === 500) {
        initToast(response.data.msg)   
    }
    return Promise.reject(response.data); 
})

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', { value: Axios })
    }
}