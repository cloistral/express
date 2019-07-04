import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
Router.prototype.back = (r) => {
    console.log(r)
    window.history.go(-1) 
}
export default new Router ({routes:routes})