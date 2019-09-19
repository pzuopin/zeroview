<template>
  <div class="tabs-item" @click='xxx'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsItem",
  inject: ['eventBus'],
  props: {
      disabled: {
          type: Boolean,
          default: false
      },
      name: {
          type: [String, Number],
          required: true
      }
  },
  created(){
    // console.log('tabs-item 收到 tabs 提供的 eventBus')
    // console.log(this.eventBus)
    this.eventBus.$on('update:selected',(name)=>{
        console.log('item 组件收到了 update:selected 事件', name)
    })
  },
  methods: {
      xxx(){
          this.eventBus.$emit('update:selected', this.name)
      }
  }
};
</script>
<style lang="scss">
.tabs-item {
    // flex-grow: 1;
    flex-shrink: 0;
    padding: 0 1em;
//   outline: 1px solid red;
}
</style>