<template>
  <li class="sub-menu" :class="{ 'sub-item-open': this.visible}">
    <div class="title" :class="{ 'sub-item-selected': this.active }" ref="title" @click="onClick">
      <span>
        <slot name="title"></slot>
      </span>
      <span name="icon">
        <z-icon name="down"></z-icon>
      </span>
    </div>
    <ul v-if="visible" class="sub-menu-list">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "zViewSubMenu",
  props: {
    name: {
      type: String
    }
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
    updateStyle() {
      let parent = this.$parent;
      let level = 0;
      console.log(parent.$options.name);
      while (parent.$options.name !== "zViewMenu") {
        parent = parent.$parent;
        level += 1;
      }
      if (level > 0) {
        this.level = level;
        this.$refs.title.style.paddingLeft = `${level + 2}em`; // 基础 paddingLeft = 2em
      }
    },
    updateSelf(name) {
      this.active = true;
    //   if (this.$parent.$options.name === "zViewSubMenu") {
    //     this.eventBus && this.eventBus.$emit("update:sub-item", this.name);
    //   }
    }
  },
  inject: ["eventBus"],
  mounted() {
    this.updateStyle();
    this.eventBus && this.eventBus.$on("update:sub-item", this.updateSelf);
  },
  data() {
    return {
      visible: false,
      level: 0,
      active: false
    };
  }
};
</script>
<style lang="scss" scoped>
$active-color: rgb(24, 144, 255);
$active-bg: #e6f7ff;
.sub-menu {
  display: inline-block;
  //   border: 1px solid green;
  .title {
    // background: #ccc;
    padding: 0.5em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      color: $active-color;
    }
    &.sub-item-selected {
        color: $active-color;
    }
  }

  span[name="icon"] {
    transition: all 350ms;
  }
  &.sub-item-open {
    & > .title > span[name="icon"] {
      transform: rotate(180deg);
    }
  }
  .sub-menu-list {
    // padding-left: 1em;
    display: flex;
    flex-direction: column;
  }
}
</style>