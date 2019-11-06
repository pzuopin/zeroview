import Collapse from "./collapse.vue";
import CollapseItem from "./collapse-item.vue";

const install = function(Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
  Vue.component(Collapse.name, Collapse);
};

export default install;
