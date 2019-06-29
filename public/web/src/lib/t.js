
import Vue from 'vue'
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    console.log(config.headers)
    config.headers.Authorization = 'Bearer ' + token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

let http = {
  login(url,param) {
    return new Promise((resolve,reject) =>{
        axios.get(url,{
            params : param,
            headers: {"Content-Type": "application/json;charset=utf-8"},
            transformResponse: [(data) => {return JSON.parse(data);}],
        }).then( (response) => {
            if(response.data.token) {
                localStorage.setItem('token',response.data.token)
            }
            resolve(response.data)
        })
        .catch((error) => {
            reject(error)
        })
    })
  }, 

  get(url,param) {
    return new Promise((resolve,reject) =>{
        axios.get(url,{
            params : param,
            headers: {"Content-Type": "application/json;charset=utf-8"},
            transformResponse: [(data) => {return JSON.parse(data);}],
        }).then( (response) => {
            resolve(response.data)
        })
        .catch((error) => {
            reject(error)
        })
    })
  },
  post(url,data) {
    return new Promise(function (resolve,reject) {
        axios({
            method : 'POST',
            url : url ,
            data : data,
            headers: {"Content-Type": "application/json;charset=utf-8"},
            transformRequest: [ (req) => {return JSON.stringify(req)}],
            transformResponse: [ (res) => {return JSON.parse(res)}],
        })
        .then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
  },
};

Object.defineProperty(Vue.prototype, '$http', {
    get () { return http }
}) 
