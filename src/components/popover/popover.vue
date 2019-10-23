<template>
  <div class="popover" @click.stop="xxx">
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
    xxx() {
      console.log('xxx called..')
      this.visible = !this.visible;
      let closeFn = () => {
        console.log('closeFn called..')
        this.visible = false
      }
      if(this.visible){
        console.log('add eventListener..')
        document.body.addEventListener('click', closeFn)
      }else{
        console.log('remove eventListener..')
        document.body.removeEventListener('click',closeFn)
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