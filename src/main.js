import Vue from 'vue'
import App from './App'
import Button from './components/button/button'
import Icon from './components/icon'
import ButtonGroup from './components/button/button-group'
import Input from './components/input'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Layout from './components/grid/layout'
import Content from './components/grid/content'
import Footer from './components/grid/footer'
import Header from './components/grid/header'
import Sider from './components/grid/sider'
import Toast from './components/toast'
import Tabs from './components/tab/tabs'
import TabsPane from './components/tab/tabs-pane'
import TabsBody from './components/tab/tabs-body'
import TabsItem from './components/tab/tabs-item'
import TabsHead from './components/tab/tabs-head'
import Popover from './components/popover'
import router from './router'
import store from './store'
import plugin from './plugin'

// 注册为 Vue 的全局组件
Vue.component('z-button', Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-input', Input)
Vue.component('z-col', Col)
Vue.component('z-row', Row)
Vue.component('z-layout', Layout)
Vue.component('z-header', Header)
Vue.component('z-content', Content)
Vue.component('z-footer', Footer)
Vue.component('z-sider', Sider)
Vue.component('z-toast', Toast)
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-popover', Popover)


Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
