<template>
  <div class="z-view-cascader-item-wrapper" v-if="source && source.length > 0">
    <div class="z-view-cascader-item-wrapper-left">
      <div
        class="z-view-cascader-item"
        @click="selected = item;"
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
    <div class="z-view-cascader-item-wrapper-right" v-if="visible">
      <z-view-cascader-item :source="selectedChildren"></z-view-cascader-item>
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
      selected: null
    };
  },
  computed: {
    selectedChildren() {
      if (this.selected) {
        return this.selected.children;
      }
      return [];
    },
    visible() {
      if (this.selected && this.selected.children) {
        return this.selected.children.length > 0;
      }
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
