<template>
  <div>
    <z-tabs selected='women'>
      <z-tabs-head>
        <z-tabs-item name='women'>美女</z-tabs-item>
        <z-tabs-item name='finance'>财经</z-tabs-item>
        <z-tabs-item name='sports'>体育</z-tabs-item>
      </z-tabs-head>
      <z-tabs-body>
        <z-tabs-pane name='women'>美女相关资讯</z-tabs-pane>
        <z-tabs-pane name='finance'>财经相关资讯</z-tabs-pane>
        <z-tabs-pane name='sports'>体育相关资讯</z-tabs-pane>
      </z-tabs-body>
    </z-tabs>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
</style>>