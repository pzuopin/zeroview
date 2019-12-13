<template>
  <div>
    <z-view-layout>
      <z-view-header>Header</z-view-header>
      <z-view-content>Content</z-view-content>
    </z-view-layout>
    <z-view-layout>
      <z-view-header>Header</z-view-header>
      <z-view-content>Content</z-view-content>
      <z-view-footer>Footer</z-view-footer>
    </z-view-layout>
    <z-view-layout>
      <z-view-header>Header</z-view-header>
      <z-view-layout>
        <z-view-sider>Sider</z-view-sider>
        <z-view-content>Content</z-view-content>
      </z-view-layout>

      <z-view-footer>Footer</z-view-footer>
    </z-view-layout>
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
