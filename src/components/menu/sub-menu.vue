<template>
  <li
    class="z-view-sub-menu"
    :data-name="name"
    :menu-level="this.level"
    :class="{ 'sub-item-open': this.subMenusVisible,
     'horizontal': this.direction === 'horizontal',
     'vertical': this.direction === 'vertical',
     'active': this.active}"
     v-click-outside="onClickOutSide"
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
    <template v-if="this.direction === 'vertical'">
      <transition @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
        <ul v-show="subMenusVisible" class="sub-menu-list">
          <slot></slot>
        </ul>
      </transition>
    </template>
    <template v-else>
      <ul v-show="subMenusVisible" class="sub-menu-list">
        <slot></slot>
      </ul>
    </template>
  </li>
</template>
<script>
import Icon from "@/components/icon/icon.vue";
import ClickOutside from '@/directives/click-outside.js'
export default {
  name: "zViewSubMenu",
  components: {
    "z-icon": Icon
  },
  directives: {
    ClickOutside
  },
  props: {
    name: {
      type: String
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickOutSide(){
      if(this.direction === 'horizontal'){
        this.subMenusVisible = false
      }
    },
    onClick() {
      this.subMenusVisible = !this.subMenusVisible;
      if (this.subMenusVisible) {
        this.eventBus && this.eventBus.$emit("add:open", this.name);
      }
      if (this.direction === "horizontal") {
        this.eventBus && this.eventBus.$emit("update:selected", this.name);
      }
    },
    onOpenChange(name) {
      if (name === this.name || this.childMenuNames.indexOf(name) >= 0) {
        this.subMenusVisible = true;
      } else {
        this.subMenusVisible = false;
      }
    },
    computeLevel() {
      let parent = this.$parent;
      let level = 0;
      while (parent.$options.name !== "zViewMenu") {
        if (parent.$options.name !== "zViewMenuGroup") {
          level += 1;
        }
        parent = parent.$parent;
      }
      this.level = level;
    },
    indentSelf() {
      if (this.level > 0) {
        this.$refs.title.style.paddingLeft = `${this.level + 2}em`; // 基础 paddingLeft = 2em
      }
    },
    onSelectChange(name) {
      if (this.name === name || this.childMenuNames.indexOf(name) >= 0) {
        this.active = true;
      } else {
        this.active = false;
        if (this.direction === "horizontal") {
          this.subMenusVisible = false;
        }
      }
    },
    addChild(name) {
      this.childMenuNames.push(name);
    },
    enter(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
    checkDirection() {
      if (this.direction === "vertical") {
        this.indentSelf();
        this.subMenusVisible = this.open;
      }
    },
    reportNameToParent() {
      if (this.$parent.$options.name === "zViewSubMenu") {
        this.childMenuNames.forEach(name => {
          this.$parent.addChild(name);
        });
        this.$parent.addChild(this.name);
      }
    }
  },
  inject: ["eventBus", "direction"],
  mounted() {
    this.computeLevel();
    this.checkDirection();
    this.reportNameToParent();
    this.eventBus && this.eventBus.$on("update:selected", this.onSelectChange);
    this.eventBus && this.eventBus.$on("update:open", this.onOpenChange);
  },
  data() {
    return {
      subMenusVisible: false,
      level: 0,
      active: false,
      childMenuNames: []
    };
  }
};
</script>
<style lang="scss" scoped>

.z-view-sub-menu {
  display: block;
  position: relative;
  .sub-menu-list {
    background: #fff;
    z-index: 3;
  }
  &.horizontal {
    .title {
      padding: 0.5em 2em;
    }
  }
  &.vertical {
    .title {
      padding: 0.5em 1em 0.5em 2em;
    }
  }
  .title {
    display: flex;
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
    display: inline-flex;
    margin-left: 1em;
    transition: all 350ms;
  }
  &.horizontal {
    .title {
      justify-content: center;
    }
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
    .z-view-menu-item.active {
      background: $active-bg;
      &::after {
        display: none;
      }
    }
  }
  &.vertical {
    overflow: hidden;
    .title {
      justify-content: space-between;
    }
    &.sub-item-open {
      & > .title > span[name="icon"] {
        transform: rotate(180deg);
      }
    }
    .sub-menu-list {
      transition: height 250ms;
      // padding-left: 1em;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
