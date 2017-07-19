import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as orderRoutes } from './order/routes'
// import  { routers as profileRoutes } from './profile/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...orderRoutes
  ],
  scrollBehavior: function () {
    return { x: 0, y: 0 }
  }
})

export default router