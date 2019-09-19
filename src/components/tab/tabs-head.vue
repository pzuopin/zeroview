<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name='action'></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsHead"
};
</script>
<style lang="scss">
.tabs-head {
  // outline: 1px solid red;
}
</style>