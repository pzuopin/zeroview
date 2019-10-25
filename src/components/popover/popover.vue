<template>
  <div class="popover" @click.stop="onClick">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
      console.log('onClick called..')
      this.visible = !this.visible;
      let closeFn = () => {
        console.log('closeFn called..')
        this.visible = false
        console.log('remove eventListener..')
        document.removeEventListener('click',closeFn)
      }
      if(this.visible){
        console.log('add eventListener..')
        document.addEventListener('click', closeFn)
      }else{
        console.log('vm 隐藏 popover')
      }
    }
  },
  mounted(){
  }
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