import Vue from 'vue'
import * as ElementUI from 'element-ui'
import Main from '../web/main.vue'
import router from '../web/router.js'
import mock from '../mock'
// import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
// Vue.use(mock)

new Vue({
  el: "#app",
  router,
  render: h => h(Main)
})