<template>
  <div>
    <z-layout class="layout">
      <z-header class="demo">header</z-header>
      <z-layout>
        <z-sider class="sider">sider</z-sider>
        <z-content class="demo content">content</z-content>
      </z-layout>
      <z-footer class="demo">footer</z-footer>
    </z-layout>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.demo {
  border: 1px solid #000;
  min-height: 100px;
  // &.content {
  //   flex-grow: 1;
  // }
}
.layout {
  height: 100vh;
  border: 1px solid red;
}
</style>>