<template>
  <li class="menu-item" ref="menuItem" :class="classes" @click="onClick">
    <slot></slot>
    <!-- __ {{ this.level }} -->
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
        active: this.active
      };
    }
  },
  inject: ["eventBus"],
  methods: {
    onSelectedChange(name) {
      // console.log(`item - ${this.name}, 收到 name: ${name}`)
      this.active = name === this.name;
    },
    onClick() {
      this.eventBus && this.eventBus.$emit("update:selected", this.name);
      if(this.$parent.$options.name === 'zViewSubMenu'){
          this.eventBus && this.eventBus.$emit('update:sub-item', this.name)
      }
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
        this.level = level
        this.$refs.menuItem.style.paddingLeft = `${level + 2}em`; // 基础 paddingLeft = 2em
      }
    }
  },

  mounted() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", this.onSelectedChange);
    }
    this.updateStyle();
  }
};
</script>
<style lang="scss" scoped>
$active-color: rgb(24, 144, 255);
$active-bg: #e6f7ff;
.menu-item {
  display: inline-block;
  padding: 0.5em 2em;
  &.active {
    background: $active-bg;
    color: $active-color;
    border-right: 2px solid $active-color;
    margin-right: -1px;
  }
  &:hover {
    color: $active-color;
  }
}
</style>