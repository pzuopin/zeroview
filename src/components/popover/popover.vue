<template>
  <div class="popover">
    <div
      class="content-wrapper"
      :class="[`position-${position}`]"
      ref="contentWrapper"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" @click="onClick" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "zViewPopover",
  data() {
    return {
      visible: false
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        console.log("document 添加 click 监听...");
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      console.log("document 移除 click 监听..");
      document.removeEventListener("click", this.onClickDocument);
    },
    onClickDocument(event) {
      if (
        (this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(event.target)) ||
        this.$refs.triggerWrapper.contains(event.target)
      ) {
        console.log("popover 自身的click 事件，document 不处理");
        return;
      }
      this.close();
    },
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      const {
        width,
        height,
        left,
        top
      } = triggerWrapper.getBoundingClientRect();
      const { height: contentHeight } = contentWrapper.getBoundingClientRect()
      console.log(width, height, left, top);
      console.log(window.scrollX, window.scrollY);
      console.log('contentWrapper height')
      console.log(contentHeight)
      if (this.position === "top") {
        contentWrapper.style.left = `${window.scrollX + left}px`;
        contentWrapper.style.top = `${window.scrollY + top}px`;
      } else if (this.position === "bottom") {
        contentWrapper.style.left = `${window.scrollX + left}px`;
        contentWrapper.style.top = `${window.scrollY + height + top}px`;
      } else if (this.position === "left") {
        contentWrapper.style.left = `${window.scrollX + left}px`;
        let delta = (height - contentHeight) / 2
        contentWrapper.style.top = `${window.scrollY + top + delta}px`;
      } else if (this.position === "right") {
        contentWrapper.style.left = `${window.scrollX + left + width}px`;
        let delta = (height - contentHeight) / 2
        contentWrapper.style.top = `${window.scrollY + top + delta}px`;
      }
    },
    onClick() {
      if (!this.visible) {
        this.open();
      } else {
        this.close();
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  background: #fff;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    border: 10px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
      transform: translateY(100%);
    }
    &::before {
      border-top-color: #000;
      bottom: 0;
    }
    &::after {
      border-top-color: #fff;
      bottom: 1px;
    }
  }

  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
      transform: translateY(-100%);
    }
    &::before {
      border-bottom-color: #000;
      top: 0;
    }
    &::after {
      border-bottom-color: #fff;
      top: 1px;
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translate(100%,-50%);
    }
    &::before {
      border-left-color: #000;
      right: 0;
    }
    &::after {
      border-left-color: #fff;
      right: 1px;
    }
  }

  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translate(-100%,-50%);
    }
    &::before {
      border-right-color: #000;
      left: 0;
    }
    &::after {
      border-right-color: #fff;
      left: 1px;
    }
  }
}
</style>