import Vue from "vue";
import Router from "vue-router";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/button",
      component: () => import('../docs/button.md')
    },
    // {
    //   path: "/input",
    //   component: () => import('../docs/input.md')
    // },
    // {
    //   path: "/icon",
    //   component: IconExample
    // }
  ]
});
