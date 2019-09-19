<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name='action'></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsHead",
  inject: ['eventBus'],
  created(){
    // console.log('tabs-head 收到 tabs 提供的 eventBus')
    // console.log(this.eventBus)
  }
};
</script>
<style lang="scss">
.tabs-head {
  // outline: 1px solid red;
}
</style>