<template>
  <div class="tabs-pane" :class="classes" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zViewTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  mounted() {
    // console.log("tabs-pane 收到 tabs 提供的 eventBus");
    // console.log(this.eventBus);
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
      // // console.log("pane 组件收到了 update:selected 事件", name);
      // if(name === this.name){
      //   console.log(`${name} 被选中了`)
      //   this.active = true
      // }else{
      //   this.active = false
      //   console.log(`${this.name} 没被选中了`)
      // }
    });
  }
};
</script>
<style lang="scss">
// $blue: blue;
.tabs-pane {
  margin-top: 1em;
  &.active {
    // color: $blue;
  }
  //   outline: 1px solid red;
}
</style>