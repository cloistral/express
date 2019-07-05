import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const router =  new VueRouter({
    mode: 'history',
    routes:routes
})

//导航收尾
router.beforeEach((to, from, next) => {
    next()
})
export default router

