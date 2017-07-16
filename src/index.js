import Vue from 'vue'
import * as ElementUI from 'element-ui'
import Main from './main.vue'

Vue.use(ElementUI)

new Vue({
  el: "#app",
  render: h => h(Main)
})