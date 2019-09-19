<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsPane",
  inject: ["eventBus"],
  created() {
    // console.log("tabs-pane 收到 tabs 提供的 eventBus");
    // console.log(this.eventBus);
    this.eventBus.$on("update:selected", name => {
      console.log("pane 组件收到了 update:selected 事件", name);
    });
  }
};
</script>
<style lang="scss">
.tabs-pane {
  //   outline: 1px solid red;
}
</style>