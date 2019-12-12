<template>
  <div style="margin-left: 100px; margin-top: 0px">
    <z-view-tabs selected="2">
      <z-view-tabs-head>
        <z-view-tabs-item name="1">标签一</z-view-tabs-item>
        <z-view-tabs-item name="2">标签二</z-view-tabs-item>
        <z-view-tabs-item name="3">标签三</z-view-tabs-item>
      </z-view-tabs-head>
      <z-view-tabs-body>
        <z-view-tabs-pane name="1">标签一的内容</z-view-tabs-pane>
        <z-view-tabs-pane name="2">标签二的内容</z-view-tabs-pane>
        <z-view-tabs-pane name="3">标签三的内容</z-view-tabs-pane>
      </z-view-tabs-body>
    </z-view-tabs>
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
.app {
  width: 600px;
  margin: 50px;
}
</style>>
