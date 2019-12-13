import Vue from "vue";
import App from "./App";
import Button from "./components/button/button.vue";
import Icon from "./components/icon/icon.vue";
import ButtonGroup from "./components/button/button-group";
import Input from "./components/input";
import Row from "./components/grid/row";
import Col from "./components/grid/col";
import Layout from "./components/grid/layout";
import Content from "./components/grid/content";
import Footer from "./components/grid/footer";
import Header from "./components/grid/header";
import Sider from "./components/grid/sider";
import Tabs from "./components/tab/tabs";
import TabsPane from "./components/tab/tabs-pane";
import TabsBody from "./components/tab/tabs-body";
import TabsItem from "./components/tab/tabs-item";
import TabsHead from "./components/tab/tabs-head";
import Toast from "./components/toast/index.js";
import Popover from "./components/popover/popover.vue";
import Collapse from "./components/collapse/collapse.vue";
import CollapseItem from "./components/collapse/collapse-item.vue";
import Menu from "./components/menu/menu.vue";
import MenuItem from "./components/menu/menu-item.vue";
import SubMenu from "./components/menu/sub-menu.vue";

// import router from "./router";
// import store from "./store";

// 注册为 Vue 的全局组件
Vue.component("z-button", Button);
Vue.component("z-icon", Icon);
Vue.component("z-button-group", ButtonGroup);
Vue.component("z-input", Input);
Vue.component("z-col", Col);
Vue.component("z-row", Row);
Vue.component("z-view-layout", Layout);
Vue.component("z-view-header", Header);
Vue.component("z-view-content", Content);
Vue.component("z-view-footer", Footer);
Vue.component("z-view-sider", Sider);
Vue.component("z-view-tabs", Tabs);
Vue.component("z-view-tabs-head", TabsHead);
Vue.component("z-view-tabs-body", TabsBody);
Vue.component("z-view-tabs-item", TabsItem);
Vue.component("z-view-tabs-pane", TabsPane);
Vue.component("z-popover", Popover);
Vue.component("z-view-collapse", Collapse);
Vue.component("z-view-collapse-item", CollapseItem);
Vue.component("z-menu", Menu);
Vue.component("z-menu-item", MenuItem);
Vue.component("z-sub-menu", SubMenu);

Vue.config.productionTip = false;
Vue.use(Toast);

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");
