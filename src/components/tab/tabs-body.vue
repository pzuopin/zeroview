<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsBody",
  inject: ['eventBus'],
  mounted(){
    // console.log('tabs-body 收到 tabs 提供的 eventBus')
    // console.log(this.eventBus)
  }
};
</script>
<style lang="scss">
.tabs-body {
//   outline: 1px solid red;
}
</style>