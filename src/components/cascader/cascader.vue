<template>
  <div class="z-view-cascader">
    <div class="z-view-cascader-trigger">
      <slot />
    </div>
    <div class="z-view-cascader-popover-wrapper">
      <div :key="index" v-for="(item,index) in options">
        <z-view-cascader-item :item="item"></z-view-cascader-item>
      </div>
    </div>
  </div>
</template>
<script>
import zViewCascaderItem from "./cascader-item.vue";
export default {
  name: "zViewCascader",
  components: {
    zViewCascaderItem
  },
  props: {
    options: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader {
  //   border: 1px solid red;
  margin: 10px;
  &-trigger {
    width: 100px;
    border: 1px solid black;
  }
  &-popover-wrapper {
    height: 100px;
  }
}
</style>