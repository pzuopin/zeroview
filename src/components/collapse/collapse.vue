<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "zViewCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    console.log("this.single", this.single);
    console.log('this.selected', this.selected)
    if (this.single && this.selected) {
      this.eventBus.$emit("update:selected", this.selected.slice(0,1));
    } else {
      this.eventBus.$emit("update:selected", this.selected);
    }
  }
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;
.collapse {
  border: 1px solid #d9d9d9;
  border-radius: $border-radius;
  &:first-child {
    //   border-top-color: red;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
  }
  &:last-child {
    //   border-bottom-color: yellow;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
  }
  :not(:first-child) {
    border-top: 1px solid red;
  }
}
</style>