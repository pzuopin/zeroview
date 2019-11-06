import Vue from "vue";
import Example from "./Example.vue";
import zeroview from './index.js'
import router from "./router";
import store from "./store";

// 注册为 Vue 的全局组件
Vue.config.productionTip = false;
Vue.use(zeroview);

new Vue({
  router,
  store,
  render: h => h(Example)
}).$mount("#app");
