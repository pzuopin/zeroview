<template>
  <div class="z-view-cascader">
    <div class="z-view-cascader-trigger" @click="visible = !visible">
      <slot />
    </div>
    <div class="z-view-cascader-popover-wrapper" v-if="visible">
      <z-view-cascader-item :source="options"></z-view-cascader-item>
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
  methods: {},
  data() {
    return {
      selectedItem: null,
      visible: false
    };
  },
  computed: {
    selectedItemChildren() {
      if (this.selectedItem) {
        return this.selectedItem.children;
      }
      return null;
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader {
  position: relative;
  margin: 10px;
  &-trigger {
  }
  &-popover-wrapper {
    position: absolute;
    @extend %box-shadow;
  }
}
</style>
