<template>
  <div>
    <z-view-menu direction="vertical" class="nav-menu" selected="intro">
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
        <z-view-menu-group name="基础">
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
        </z-view-menu-group>
        <z-view-menu-group name="信息提示">
          <z-view-menu-item name="popover">
            <router-link to="/popover">
              <p>Popover</p>
            </router-link>
          </z-view-menu-item>
        </z-view-menu-group>

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

    <z-view-menu class="nav-menu test2" selected="intro" open>
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
        <z-view-sub-menu name="submenu1" open>
          <template slot="title">次级sub</template>
          <z-view-menu-item name="test1">test1</z-view-menu-item>
          <z-view-menu-item name="test2">test2</z-view-menu-item>
          <z-view-menu-item name="test3">test3</z-view-menu-item>
        </z-view-sub-menu>
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
  components: {},
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
a {
  &:hover,
  &:visited,
  &:active {
    // text-decoration: unset;
    color: unset;
  }
  text-decoration: unset;
}
ul,
ol {
  list-style: none;
}
.nav-menu {
  margin: 100px;
}
.test2 {
  margin-top: 500px;
}
</style>>
