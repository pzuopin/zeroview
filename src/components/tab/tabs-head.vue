<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewTabsHead",
  inject: ["eventBus"],
  created() {
    // console.log('tabs-head 收到 tabs 提供的 eventBus')
    // console.log(this.eventBus)
  }
};
</script>
<style lang="scss">
// $tab-height: 40px;
.tabs-head {
  // outline: 1px solid red;
  border-bottom: 1px solid #ccc;
  display: flex;
  // height: $tab-height;
  justify-content: start;
  align-items: center;
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>