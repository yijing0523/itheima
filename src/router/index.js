// 导包
import VueRouter from 'vue-router'
// 导包
import Vue from 'vue'
// 注册
Vue.use(VueRouter)
// 防止同路由点击报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
// 创建实例 
const router = new VueRouter({
    routes: [

    ]
})
// 暴露实例
export default router