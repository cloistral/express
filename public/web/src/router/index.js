import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({ routes: routes })
VueRouter.prototype.forward = function (options, type) {
    this.method = type || 'push';
    this.push(options,(complete) => {}, (abort) => {})
}

VueRouter.prototype.prev = function () { this.go(-1) }


router.beforeEach((to, from, next) => {
    if (to.name === null) { next('/index') }
    next()
})
router.beforeResolve((to, from, next) => { next() })
router.afterEach((to, from) => {})
export default router

