<template>
  <div class="tabs">
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
      this.eventBus.$emit('update:selected', this.selected)
  },
  created(){
    //   console.log(this)
    //   this.$emit('update:selected', 'xxx')
  }
};
</script>
<style lang="scss">
.tabs {
//   outline: 1px solid red;
}
</style>