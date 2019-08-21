import Vue from 'vue'
import App from './App'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import router from './router'
import store from './store'

// 注册为 Vue 的全局组件
Vue.component('z-button', Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-input', Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
