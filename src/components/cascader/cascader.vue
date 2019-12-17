<template>
  <div class="z-view-cascader">
    <div :key="index" v-for="(item,index) in options">
      <z-view-cascader-item :item="item"></z-view-cascader-item>
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
}
</style>