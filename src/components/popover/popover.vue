<template>
  <div class="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
  methods: {
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        console.log('document 添加 click 监听...')
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
      this.close()
    },
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      const {
        width,
        height,
        left,
        top
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      console.log(width, height, left, top);
      this.$refs.contentWrapper.style.left = `${left}px`;
      this.$refs.contentWrapper.style.top = `${top}px`;
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
  left: 0;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
  margin-top: -10px;
  padding: 0.5em 1em;
  background: #fff;
}
</style>