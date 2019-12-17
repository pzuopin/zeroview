<template>
  <div class="z-view-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "zViewTabs",
  props: {
      selected: {
          type: String,
          required: true,
      },
      direction: {
          type: String,
          default: 'horizontal',
          validator(value){
              return ['horizontal','vertical'].indexOf(value) >= 0
          }
      }
  },
  data(){
      return {
          eventBus: new Vue()
      }
  },
  // 提供 eventBus，子组件都能通过 inject 属性注入 eventBus
  provide(){
      return {
          eventBus: this.eventBus
      }
  },
  mounted(){
      // 检查子组件
      if(this.$children.length === 0){
          console && console.warn &&
          console.warn('tabs 的子组件应该是 tabs-head 和 tabs-body，但是没有找到')
      }
      this.$children.forEach(vm => {
          if(vm.$options.name === 'zViewTabsHead'){
              vm.$children.forEach((childVm, index) => {
                  if(childVm.$options.name === 'zViewTabsItem' && childVm.name === this.selected){
                      this.eventBus.$emit('update:selected', this.selected, childVm)
                  }
              })
          }
      })
  },
  created(){
    //   console.log(this)
    //   this.$emit('update:selected', 'xxx')
  }
};
</script>
<style lang="scss" scoped>
.z-view-tabs {
//   outline: 1px solid red;
}
</style>
