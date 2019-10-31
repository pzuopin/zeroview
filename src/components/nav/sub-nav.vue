<template>
  <li class="sub-nav" :class="{active}" >
    <div class="title" @click="onClick">
      <slot name="title"></slot>
    </div>
    <ul v-show="visible" class="popover">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "zViewSubNav",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      active: false,
      level: 1
    };
  },
  inject: ["root"],
  methods: {
    onClick() {
this.visible = !this.visible
    },
    updateNamePath(){
      this.root.namePath.unshift(this.name)
      if(this.$parent.updateNamePath){
        this.$parent.updateNamePath()
      }
    },
    onSelectChange(name) {
      this.active = this.root.namePath.indexOf(this.name) >= 0;
    },
    computeLevel(){
      let parent = this.$parent
      while(parent !== this.root){
        this.level += 1 
        parent = this.$parent
      }
    }
  },
  mounted() {
    this.root.addItem(this);
    this.computeLevel()
  }
};
</script>
<style lang="scss" scoped>
.sub-nav {
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

  .title {
    padding: 1em;
    // border: 1px solid green;
  }
  .popover {
    box-shadow: 0 0 3px #333;
    position: absolute;
    left: 0;
    white-space: nowrap;
    margin-top: 4px;
    .nav-item {
    }
    .nav-item::after {
      display: none;
    }
  }
}
</style>