<template>
  <div class="z-view-cascader">
    <div class="z-view-cascader-trigger" @click="visible = !visible">
      <div v-if="$slots.default">
        <div class="z-view-cascader-output">{{ output }}</div>
        <slot />
      </div>
      <span v-else class="z-view-cascader-output-default">{{ output || '&nbsp;' }}</span>
    </div>
    <div class="z-view-cascader-popover-wrapper" v-if="visible">
      <z-view-cascader-item
        :load-data="loadData"
        :source="options"
        @update:selected="onUpdate($event)"
        :selected="selected"
      ></z-view-cascader-item>
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
      type: Array,
      default: () => []
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  methods: {
    onUpdate(newSelected) {
      this.$emit("update:selected", newSelected.map(item => ({ id: item.id, label: item.label})));
    },
    resolveData(data){
      // this.options.
    }
  },
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
    },
    output() {
      return this.selected.map(i => i.label).join("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader {
  position: relative;
  margin: 10px;
  &-trigger {
    margin: 1px 0;
  }
  &-popover-wrapper {
    position: absolute;
    height: 200px;
    @extend %box-shadow;
  }
  &-output {
    margin-bottom: 2px;
    font-size: 14px;
  }
  &-output-default {
    display: inline-block;
    height: $height;
    line-height: $height;
    border-radius: $border-radius;
    border: 1px solid $border-color-1;
    @extend %text-ellipsis;
    width: 12em;
    padding: 0 1em;
    font-size: 14px;
  }
}
</style>
