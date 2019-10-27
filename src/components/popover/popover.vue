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
    <span ref="triggerWrapper" style="display: inline-block">
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
    trigger: {
      type: String,
      default: 'hover',
      validator(value){
        return ['click','hover'].indexOf(value) >= 0
      }
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.triggerWrapper.addEventListener('click',this.onClick)
    }else if(this.trigger === 'hover'){
      this.$refs.triggerWrapper.addEventListener('mouseenter',this.open)
      this.$refs.triggerWrapper.addEventListener('mouseleave',this.close)
    }
  },
  destroyed(){
    if(this.trigger === 'click'){
      this.$refs.triggerWrapper.removeEventListener('click',this.onClick)
    }else if(this.trigger === 'hover'){
      this.$refs.triggerWrapper.removeEventListener('mouseleave',this.close)
      this.$refs.triggerWrapper.removeEventListener('mouseenter',this.open)
    }
  },
  methods: {
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        if(this.trigger === 'click'){
          // console.log('document 添加 click 监听..')
          document.addEventListener("click", this.onClickDocument);
        }
      });
    },
    close() {
      this.visible = false;
      if(this.trigger === 'click'){
        // console.log("document 移除 click 监听..");
        document.removeEventListener("click", this.onClickDocument);
      }
    },
    onClickDocument(event) {
      if (
        (this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(event.target)) ||
        this.$refs.triggerWrapper.contains(event.target)
      ) {
        // console.log("popover 自身的click 事件，document 不处理");
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
      const delta = (height - contentHeight) / 2
      const map = {
        top: {
          left: window.scrollX + left,
          top: window.scrollY + top
        },
        bottom: {
          left: window.scrollX + left,
          top: window.scrollY + height + top
        },
        left: {
          left: window.scrollX + left,
          top: window.scrollY + top + delta,
        },
        right: {
          left: window.scrollX + left + width,
          top: window.scrollY + top + delta
        }
      }
      contentWrapper.style.left = map[this.position].left + 'px'
      contentWrapper.style.top = map[this.position].top + 'px'
    },
    onClick() {
      if (!this.visible) {
        this.open();
      } else {
        this.close();
      }
    }
  },
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
      border-bottom:none;
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
      border-top:none;
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
      border-right:none;
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
      border-left:none;
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