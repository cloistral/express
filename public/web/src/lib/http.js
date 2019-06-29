import axios from 'axios'

const Axios = axios.create({timeout: 10000})
Axios.interceptors.request.use(config => {
    if (localStorage.token) {   
        config.headers.Authorization = 'Bearer ' + localStorage.token
        console.log(config.headers.Authorization)
    }
    return config
},error =>{
    return error
})


Axios.interceptors.response.use(response =>{
    return response.data
}, error => {
    if(error.response.status === 401) {
      // 401 说明 token 验证失败
    } 
    console.log('错误信息',error)
    return error
})

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}