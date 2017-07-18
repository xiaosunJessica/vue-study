import Vue from 'vue'
import * as ElementUI from 'element-ui'
import Main from './main.vue'
// import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
  el: "#app",
  render: h => h(Main)
})