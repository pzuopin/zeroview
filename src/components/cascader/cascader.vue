<template>
  <div class="z-view-cascader">
    <div class="z-view-cascader-trigger">
      <slot />
    </div>
    <div class="z-view-cascader-popover-wrapper">
      <div class="z-view-cascader-popover-popover">
        <div  @click="selectedItem = item" class="z-view-cascader-popover-left" :key="index" v-for="(item,index) in options">
          {{ item.label }}
        </div>
        <div class="z-view-cascader-popover-right">
          <z-view-cascader-item :children="selectedItemChildren"></z-view-cascader-item>
        </div>
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
  },
  methods: {
  },
  data(){
    return {
      selectedItem: null,
    }
  },
  computed:{
    selectedItemChildren(){
      if(this.selectedItem){
        return this.selectedItem.children
      }
      return null
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader {
  //   border: 1px solid red;
  margin: 10px;
  &-trigger {
    // width: 100px;
    // border: 1px solid black;
  }
  &-popover-wrapper {
    height: 100px;
  }
}
</style>
