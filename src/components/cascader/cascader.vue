<template>
  <div class="z-view-cascader">
    <div :key="index" v-for="(item,index) in options">
      {{ item.label }}
      <div :key="index1" v-for="(item1,index1) in item.children">
        {{ item1.label }}
        <div :key="index2" v-for="(item2,index2) in item1.children">{{ item2.label }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewCascader",
  props: {
    options: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader {
  border: 1px solid red;
  margin: 10px;
}
</style>