import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as orderRoutes } from './order/routes'
import { routes as notFoundRoutes } from './not-found/routes'
// import  { routers as profileRoutes } from './profile/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...orderRoutes,
    ...notFoundRoutes
  ],
  scrollBehavior: function () {
    return { x: 50, y: 50 }
  }
})

export default router