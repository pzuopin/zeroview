import Vue from 'vue'
import App from './App'
import Button from './components/Button'
import Icon from './components/Icon'
import router from './router'
import store from './store'

// 注册为 Vue 的全局组件
Vue.component('z-button', Button)
Vue.component('z-icon',Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
