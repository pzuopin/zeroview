<template>
  <div class="tabs-head">
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
    this.eventBus.$on('update:selected',(name, vm)=>{
      // console.log(vm.$el)
      let {width, height, left, top} = vm.$el.getBoundingClientRect()
      // console.log(width, height, left, top)
      let line = this.$refs.line
      line.style.width = `${width}px`
      line.style.left = `${left}px`
      // console.log(line)
      // console.log('tabs-head 收到了 update:selected 事件,', name, index)
    })
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
  position: relative;
  > .action-wrapper {
    margin-left: auto;
  }
  > .line {
    transition: width 350ms, left 350ms;
    position: absolute;
    bottom: 0;
    // width: 100px;
    border-bottom: 1px solid blue;
  }
}
</style>