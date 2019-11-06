<template>
  <div id="example">
    <div>
      <z-view-layout>
        <z-view-header class="header">
          <h3>zView</h3>
          <p>一套基于 vue 2.6 的 UI 组件库</p>
        </z-view-header>
        <z-view-layout>
          <z-view-sider class="sider">
            <z-view-menu direction="vertical" class="nav-menu">
              <z-view-menu-item name="intro">介绍</z-view-menu-item>
              <z-view-sub-menu name="components">
                <template slot="title">组件</template>
                <z-view-menu-item name="button">Button</z-view-menu-item>
                <z-view-menu-item name="icon">Icon</z-view-menu-item>
                <z-view-menu-item name="input">Input</z-view-menu-item>
              </z-view-sub-menu>
            </z-view-menu>
          </z-view-sider>
          <z-view-content class="content">content</z-view-content>
        </z-view-layout>
      </z-view-layout>
    </div>
  </div>
</template>
<script>
export default {};
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
#example {
  margin: 0 auto;
  width: 80%;
}
.header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.sider {
  padding-top: 20px;
  width: 200px;
  overflow: scroll;
  height: calc(100vh - 50px);
  .nav-menu {
    height: 100%;
  }
}
.content {
  padding: 20px;
  // border: 1px solid blue;
}
</style>
