import Vue from "vue";
import Router from "vue-router";
import hljs from "highlight.js";

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: "/layout",
      component: () => import("../docs/layout.md")
    },
    {
      path: "/menu",
      component: () => import("../docs/menu.md")
    },
    {
      path: "/cascader",
      component: () => import('../docs/cascader.md')
    }

  ]
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  })

})

export default router
