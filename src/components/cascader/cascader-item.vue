<template>
  <div class="z-view-cascader-item-wrapper" v-if="source && source.length > 0">
    <div class="z-view-cascader-item-wrapper-left">
      <div
        class="z-view-cascader-item"
        @click="leftSelected = item;"
        :key="index"
        v-for="(item,index) in source"
      >
        {{ item.label }}
        <z-view-icon
          class="z-view-cascader-item-icon"
          v-if="item.children && item.children.length > 0"
          name="right"
        ></z-view-icon>
      </div>
    </div>
    <div class="z-view-cascader-item-wrapper-right" v-if="rightItems">
      <z-view-cascader-item :source="rightItems"></z-view-cascader-item>
    </div>
  </div>
</template>
<script>
import zViewIcon from "../icon/icon.vue";
export default {
  name: "zViewCascaderItem",
  components: {
    zViewIcon
  },
  props: {
    source: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected) {
        return this.leftSelected.children;
      }
      return null;
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader-item-wrapper {
  display: flex;
  &-left {
    background: $bg-white;
  }
  &-right {
    border-left: 1px solid $border-color-1;
  }
  .z-view-cascader-item {
    padding: 0.5em 1em;
    font-size: 14px;
    &:hover {
      background: $active-color-light;
    }
    display: flex;
    align-items: center;
  }
  .z-view-cascader-item-icon {
    margin-left: 0.5em;
    transform: scale(0.7);
  }
}
</style>
