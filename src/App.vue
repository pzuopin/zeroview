<template>
  <div>
    <z-view-menu class="nav-menu" selected="intro">
      <z-view-menu-item name="intro">
        <router-link to="/">
          <p>介绍</p>
        </router-link>
      </z-view-menu-item>
      <z-view-menu-item name="install">
        <router-link to="/install">
          <p>安装</p>
        </router-link>
      </z-view-menu-item>
      <z-view-menu-item name="quickstart">
        <router-link to="quickstart">
          <p>快速上手</p>
        </router-link>
      </z-view-menu-item>
      <z-view-sub-menu name="components" open>
        <template slot="title">组件</template>
        <z-view-menu-item name="button">
          <router-link to="/button">
            <p>Button</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="icon">
          <router-link to="/icon">
            <p>Icon</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="input">
          <router-link to="/input">
            <p>Input</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="popover">
          <router-link to="/popover">
            <p>Popover</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="collapse">
          <router-link to="/collapse">
            <p>Collapse</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="toast">
          <router-link to="/toast">
            <p>Toast</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="tab">
          <router-link to="/tab">
            <p>Tab</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="grid">
          <router-link to="/grid">
            <p>Grid</p>
          </router-link>
        </z-view-menu-item>
        <z-view-menu-item name="layout">
          <router-link to="/layout">
            <p>Layout</p>
          </router-link>
        </z-view-menu-item>
      </z-view-sub-menu>
    </z-view-menu>
  </div>
</template>


<script>
export default {
  name: "App",
  mounted() {},
  methods: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
.z-view-header {
  // width: 100px;
  height: 60px;
  background: #ccc;
  text-align: center;
}
.z-view-content {
  // width: 100px;
  height: 160px;
  background: #f0f0f0;
  text-align: center;
}
.z-view-sider {
  width: 100px;
  background: #ddd;
}
.z-view-footer {
  height: 60px;
  background: #ddd;
  text-align: center;
}
</style>>
