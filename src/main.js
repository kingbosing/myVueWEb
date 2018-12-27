import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, {
  size: 'medium' // set element-ui default size
})


import './per'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  template: '<App/>',
}).$mount('#app')
