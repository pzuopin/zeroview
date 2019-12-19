<template>
  <div class="z-view-cascader-item-wrapper" v-if="source && source.length > 0">
    <div class="z-view-cascader-item-wrapper-left">
      <div
        class="z-view-cascader-item"
        @click="onClickLabel(item)"
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
      <z-view-cascader-item
        @update:selected="onUpdate($event)"
        :source="rightItems"
        :level="level+1"
        :selected="selected"
      ></z-view-cascader-item>
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems() {
      if (this.selected && this.selected[this.level]) {
        return this.selected[this.level].children;
      }
      return null;
    }
  },
  methods: {
    onClickLabel(item) {
      console.log(item);
      // this.selected[this.level] = item;
      // this.$set(this.selected, this.level, item);
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    onUpdate(newSelected) {
      this.$emit("update:selected", newSelected);
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
