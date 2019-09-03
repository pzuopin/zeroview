<template>
  <div class="toast" ref="wrapper">
    <slot v-if="!enableHTML"></slot>
    <div v-else class="content" v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "zViewToast",
  props: {
    // content: {
    //   type: String,
    //   default: ''
    // },
    enableHTML: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "close",
          callback: undefined
        };
      }
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      const { closeButton } = this;
      const { callback } = closeButton;
      if (closeButton && callback && typeof callback === "function") {
        this.closeButton.callback();
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
    this.$nextTick(()=>{
      let height = this.$refs.wrapper.getBoundingClientRect().height;
      console.log("height", height);
      this.$refs.line.style.height = `${height}px`;
    })
  }
};
</script>
<style lang="scss" scoped>
.toast {
  $toast-bg: rgba(0, 0, 0, 0.75);
  $font-size: 14px;
  $toast-height: 40px;
  // border: 1px solid red;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 16px;
  color: white;
  background: $toast-bg;
  min-height: $toast-height;
  font-size: $font-size;
  line-height: 1.8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  .close {
    flex-shrink: 0;
    // padding-left: 16px;
    // border: 1px solid red;
  }
  .line {
    // height: 100px;
    height: 100%;
    border: 1px solid #fff;
    margin: 0 16px;
  }
}
</style>