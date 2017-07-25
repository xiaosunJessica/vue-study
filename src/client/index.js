import Vue from 'vue';
import * as ElementUI from 'element-ui';
import Main from '../web/main.vue';
import router from '../web/router.js';
// import mock from '../mock';
import store from '../web/store.js';
import filter from '../web/common/filter';
// import 'element-ui/lib/theme-default/index.css'

Vue.use(filter);
Vue.use(ElementUI);
// Vue.use(mock)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
});