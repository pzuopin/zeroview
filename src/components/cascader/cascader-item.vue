<template>
  <div class="z-view-cascader-item-wrapper" v-if="source && source.length > 0">
    <div class="z-view-cascader-item-wrapper-left">
      <div
        class="z-view-cascader-item"
        @click="onClickLeft(item)"
        :key="index"
        v-for="(item,index) in source"
      >
        <span>{{ item.label }}</span>
        <z-view-icon
          class="z-view-cascader-item-icon"
          v-if="rightIconVisible(item)"
          name="right"
        ></z-view-icon>
      </div>
    </div>
    <div class="z-view-cascader-item-wrapper-right" v-if="rightItems">
      <z-view-cascader-item
        @update:selected="onClickRight($event)"
        :source="rightItems"
        :level="level+1"
        :selected="selected"
        :load-data="loadData"
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
    },
    loadData: {
      type: Function
    }
  },
  computed: {
    rightItems() {
      console.log('rightItems source...')
      console.log(this.source)
      console.log('selected')
      console.log(this.selected.map(item => item.label))
      if (this.source && this.selected && this.selected[this.level]) {
        return this.source.filter(item => item.id === this.selected[this.level].id)[0].children;
      }
      return null;
    },

  },
  methods: {
    rightIconVisible(item){
      return item.isLeaf === false || item.children && item.children.length > 0
    },
    onClickLeft(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
      if(this.loadData){
        this.loadData(copy)
      }
    },
    onClickRight(newSelected) {
      this.$emit("update:selected", newSelected);
    },
  }
};
</script>
<style lang="scss" scoped>
.z-view-cascader-item-wrapper {
  display: flex;
  height: 100%;
  &-left {
    overflow: auto;
    background: $bg-white;
    height: 100%;
  }
  &-right {
    border-left: 1px solid $border-color-1;
    height: 100%;
  }
  .z-view-cascader-item {
    width: 8em;
    // justify-content: space-around;
    > span {
      padding: 0.5em 0 0.5em 0.5em;
      font-size: 14px;
      width: 6em;
      @extend %text-ellipsis;
      display: inline-block;
    }
    &:hover {
      background: $active-color-light;
    }
    display: flex;
    align-items: center;
  }
  .z-view-cascader-item-icon {
    // margin: 10px;
    transform: scale(0.7);
    width: 1em;
  }
}
</style>
