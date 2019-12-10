import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import('../docs/intro.md')
    },
    {
      path: "/install",
      component: () => import('../docs/install.md')
    },
    {
      path: "/quickstart",
      component: () => import('../docs/quickstart.md')
    },
    {
      path: "/button",
      component: () => import('../docs/button.md')
    },

  ]
});
