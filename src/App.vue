<template>
  <div>
    <z-layout class="layout">
      <z-sider>sider</z-sider>
      <z-layout>
        <z-header>header</z-header>
        <z-content>content</z-content>
        <z-footer>footer</z-footer>
      </z-layout>
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
  // border: 1px solid #000;
  // min-height: 100px;
  // &.content {
  //   flex-grow: 1;
  // }
}
.layout {
  height: 100vh;
  // border: 1px solid red;
}
.sider {
  background: #333;
  width: 300px;
}
.sider.fade-enter, .sider.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
margin: -300px;
}
.header {
  background: #999;
  height: 100px;
}
.footer {
  background: #ccc;
  height: 50px;
}
</style>>