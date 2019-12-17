<template>
  <div class="z-view-tabs-head" ref="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let { width, height, left, top } = vm.$el.getBoundingClientRect();
      let { width: width2, left: left2 } = this.$refs['tabs-head'].getBoundingClientRect()
      let line = this.$refs.line;
      line.style.width = `${width}px`;
      line.style.left = `${left - left2}px`;
    });
  }
};
</script>
<style lang="scss" scoped>
// $tab-height: 40px;
.z-view-tabs-head {
  // outline: 1px solid red;
  border-bottom: 1px solid $border-color-1;
  display: flex;
  // height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .action-wrapper {
    margin-left: auto;
  }
  .line {
    transition: width 350ms, left 350ms;
    position: absolute;
    bottom: 0;
    // width: 100px;
    border-bottom: 1px solid $--primary-color;
  }
}
</style>
