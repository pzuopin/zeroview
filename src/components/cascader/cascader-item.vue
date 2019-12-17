<template>
  <div class="z-view-cascader-item">
    {{ item.label }}
    <div v-if="item.children">
      <z-view-cascader-item :key="index" v-for="(child,index) in item.children" :item="child"></z-view-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewCascaderItem",
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader-item {
  border: 1px solid blue;
  margin: 10px;
}
</style>