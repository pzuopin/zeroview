import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("../docs/intro.md")
    },
    {
      path: "/install",
      component: () => import("../docs/install.md")
    },
    {
      path: "/quickstart",
      component: () => import("../docs/quickstart.md")
    },
    {
      path: "/button",
      component: () => import("../docs/button.md")
    },
    {
      path: "/icon",
      component: () => import("../docs/icon.md")
    },
    {
      path: "/input",
      component: () => import("../docs/input.md")
    },
    {
      path: "/popover",
      component: () => import("../docs/popover.md")
    },
    {
      path: "/collapse",
      component: () => import("../docs/collapse.md")
    },
    {
      path: "/toast",
      component: () => import("../docs/toast.md")
    },
    {
      path: "/tab",
      component: () => import("../docs/tab.md")
    },
    {
      path: "/grid",
      component: () => import("../docs/grid.md")
    }
  ]
});
