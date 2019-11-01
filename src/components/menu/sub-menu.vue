<template>
  <li
    class="sub-menu"
    :data-name="name"
    :menu-level="this.level"
    :class="{ 'sub-item-open': this.visible,
     'horizontal': this.direction === 'horizontal',
     'vertical': this.direction === 'vertical',
     'active': this.active}"
  >
    <div class="title" :class="{ 'sub-item-selected': this.active }" ref="title" @click="onClick">
      <span>
        <slot name="title"></slot>
      </span>
      <span name="icon" v-if="this.direction === 'horizontal' && this.level > 0">
        <z-icon name="right"></z-icon>
      </span>
      <span name="icon" v-if="this.direction === 'vertical'">
        <z-icon name="down"></z-icon>
      </span>
    </div>
    <ul v-show="visible" class="sub-menu-list">
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
      if (this.visible) {
        this.eventBus && this.eventBus.$emit("add:open", this.name);
      }
      if (this.direction === "horizontal" && this.level === 0) {
        // this.active = true;
        this.eventBus && this.eventBus.$emit("update:selected", this.name);
      }
    },
    onOpenChange(name) {
      console.log(`${this.name} openChange `, name);
      if (name === this.name || this.childMenuNames.indexOf(name) >= 0) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
    computeLevel() {
      let parent = this.$parent;
      let level = 0;
      // console.log(parent.$options.name);
      while (parent.$options.name !== "zViewMenu") {
        parent = parent.$parent;
        level += 1;
      }
      this.level = level;
    },
    updateStyle() {
      if (this.level > 0) {
        this.$refs.title.style.paddingLeft = `${this.level + 2}em`; // 基础 paddingLeft = 2em
      }
    },
    onSelectChange(name) {
      if (this.name === name || this.childMenuNames.indexOf(name) >= 0) {
        this.active = true;
      } else {
        this.active = false;
        // this.visible = false;
      }
    },
    getChildMenuNames() {
      const names = [];
      this.$children.forEach(vm => {
        names.push(vm.name);
        if (vm.$options.name === "zViewSubMenu") {
          names.push(...vm.getChildMenuNames());
        }
      });
      console.log(`我是${this.name},我的孩子有`);
      console.log(names);
      return names;
    }
  },
  inject: ["eventBus", "direction"],
  mounted() {
    this.computeLevel();
    if (this.direction === "vertical") {
      this.updateStyle();
    }
    this.childMenuNames = this.getChildMenuNames();
    this.eventBus && this.eventBus.$on("update:selected", this.onSelectChange);
    this.eventBus && this.eventBus.$on("update:open", this.onOpenChange);
  },
  data() {
    return {
      visible: false,
      level: 0,
      active: false,
      childMenuNames: []
    };
  }
};
</script>
<style lang="scss" scoped>
$active-color: rgb(24, 144, 255);
$active-bg: #e6f7ff;
.sub-menu {
  display: inline-block;
  position: relative;
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
    span {
      white-space: nowrap;
    }
  }

  span[name="icon"] {
    margin-left: 1em;
    transition: all 350ms;
  }
  &.horizontal {
    &.active[menu-level="0"] {
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
    .sub-item-open {
      & > .title > span[name="icon"] {
        transform: rotate(180deg);
      }
    }

    .sub-menu-list {
      position: absolute;
      border: 1px solid #ccc;
      margin-top: 5px;
      .sub-menu-list {
        border: 1px solid #ccc;
        position: absolute;
        left: 100%;
        top: 0;
        margin-left: 5px;
      }
    }
    .menu-item.active {
      background: $active-bg;
      &::after {
        display: none;
      }
    }
  }
  &.vertical {
    .sub-item-open {
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
}
</style>
