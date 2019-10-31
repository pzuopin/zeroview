<template>
  <li class="nav-item" :class="{active}" @click="onClick">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: "zViewNavItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ["root"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    onClick() {
        this.root.namePath = []
        if(this.$parent.updateNamePath){
            this.$parent.updateNamePath()
        }
        this.root.updateSelect(this.name)
    },
    onSelectChange(name) {
      console.log(`this.name ${this.name}`)
      console.log(`name ${name}`)
      this.active = name === this.name;
    },
    computeLevel() {
      let parent = this.$parent;
      while (parent !== this.root) {
        this.level += 1;
        parent = this.$parent;
      }
    }
  },
  mounted() {
    this.root.addItem(this);
  }
};
</script>
<style lang="scss" scoped>
.nav-item {
  display: block;
  // border: 1px solid pink;
  padding: 1em;
  position: relative;
  &.active {
    &::after {
      content: "";
      display: block;
      height: 0;
      width: 100%;
      border-top: 2px solid $active-color;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>