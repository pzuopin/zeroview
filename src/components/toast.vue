<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHTML"></slot>
      <div v-else class="content" v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "zViewToast",
  props: {
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
    },
    position: {
      type: String,
      default: 'top',
      validator(value){
        console.log('11',value)
        return ['bottom','middle','top'].indexOf(value) >= 0
      }
    }
  },
  computed:{
    toastClasses(){
      return [`position-${this.position}`]
    }
  },
  methods: {
    setAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        let height = this.$refs.wrapper.getBoundingClientRect().height;
        console.log("height", height);
        this.$refs.line.style.height = `${height}px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit('close');
      this.$destroy();
    },
    onClickClose() {
      this.close();
      const { closeButton } = this;
      const { callback } = closeButton;
      if (closeButton && callback && typeof callback === "function") {
        this.closeButton.callback(this);
      }
    }
  },
  mounted() {
    this.updateStyles();
    this.setAutoClose();
  }
};
</script>
<style lang="scss" scoped>
  $toast-bg: rgba(0, 0, 0, 0.75);
  $font-size: 14px;
  $toast-height: 40px;
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(100%);}
    100% { opacity: 1; transform: translateY(0%);}
  }
.toast {
  // border: 1px solid red;
  animation: fadeIn 1s;
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
  .message {
    padding: 8px 0;
  }
  .close {
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border: 1px solid #fff;
    margin: 0 16px;
  }
  &.position-bottom {
    position: fixed;
    bottom: 0;
    top: unset;
  }
  &.position-middle {
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: unset;
    transform: translate(-50%,-50%)
  }
}
</style>