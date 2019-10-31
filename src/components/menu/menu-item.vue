<template>
  <li class="menu-item" ref="menuItem" :data-name="name" :class="classes" @click="onClick">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: "zViewMenuItem",
  props: {
    name: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      active: false,
      level: 0
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        vertical: this.direction === "vertical",
        horizontal: this.direction === "horizontal"
      };
    }
  },
  inject: ["eventBus", "direction"],
  methods: {
    onSelectedChange(name) {
      // console.log(`item - ${this.name}, 收到 name: ${name}`)
      this.active = name === this.name;
    },
    onClick() {
      this.eventBus && this.eventBus.$emit("update:selected", this.name);
    },
    updateStyle() {
      let parent = this.$parent;
      let level = 0;
      // console.log(parent.$options.name);
      while (parent.$options.name !== "zViewMenu") {
        parent = parent.$parent;
        level += 1;
      }
      if (level > 0) {
        this.level = level;
        this.$refs.menuItem.style.paddingLeft = `${level + 2}em`; // 基础 paddingLeft = 2em
      }
    }
  },

  mounted() {
    // console.log('menu-item mounted..')
    if (this.eventBus) {
      this.eventBus.$on("update:selected", this.onSelectedChange);
    }
    if (this.direction === "vertical") {
      this.updateStyle();
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-item {
  display: block;
  padding: 0.5em 2em;
  position: relative;
  &.vertical {
    &.active {
      background: $active-bg;
      color: $active-color;
      border-right: 2px solid $active-color;
      margin-right: -1px;
    }
  }
  &.horizontal {
    &.active {
      color: $active-color;
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 0;
        border-bottom: 2px solid $active-color;
        left: 0;
        bottom: 0;
      }
    }
  }

  &:hover {
    color: $active-color;
  }
}
</style>
