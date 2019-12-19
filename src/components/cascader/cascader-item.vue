<template>
  <div class="z-view-cascader-item">
    <div v-if="children && children.length > 0">
      <div :key="index" v-for="(child,index) in children">{{ child.label }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewCascaderItem",
  props: {
    children: {
      type:Array
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
