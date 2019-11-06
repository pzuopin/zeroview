import Vue from "vue";
import Router from "vue-router";
import ButtonExample from "@/components/button/button-example.vue";
import IconExample from "@/components/icon/icon-example.vue";
import InputExample from "@/components/input/input-example.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/button",
      component: ButtonExample
    },
    {
      path: "/input",
      component: InputExample
    },
    {
      path: "/icon",
      component: IconExample
    }
  ]
});
