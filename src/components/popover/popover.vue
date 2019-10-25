<template>
  <div class="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper" @click="onClick">
      <slot></slot>
    </div>
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
    onClick() {
      console.log("onClick called..");
      this.visible = !this.visible;

      if (this.visible) {
        console.log("添加 document 监听..");
        this.$nextTick(() => {
          let closeFn = event => {
            console.log("closeFn called 1..");
            console.log(event.target)
            if (
              this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target) ||
              this.$refs.triggerWrapper.contains(event.target)
            ) {
              console.log("popover 自身的click 事件，document 不处理");
              return;
            }
            this.visible = false;
            console.log("document 隐藏 popover，并移除监听..");
            document.removeEventListener("click", closeFn);
          };
          document.addEventListener("click", closeFn);
        });
      } else {
        console.log("vm 隐藏 popover");
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>