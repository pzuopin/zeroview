import Menu from "./menu.vue";
import MenuItem from "./menu-item.vue";
import SubMenu from "./sub-menu.vue";

const install = function(Vue) {
  Vue.component(Menu.name, Menu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(SubMenu.name, SubMenu);
};

export default install;
