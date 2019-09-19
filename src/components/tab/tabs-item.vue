<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsItem",
  props: {
      disabled: {
          type: Boolean,
          default: false
      }
  }
};
</script>
<style lang="scss">
.tabs-item {
//   outline: 1px solid red;
}
</style>