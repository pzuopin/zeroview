<template>
  <div class="collapse-item">
    <p class="title">{{ this.title }}</p>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewCollapseItem",
  data(){
    return {
        visible: false
    }
  },
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    name: {
        type: String,
        default: "",
        required: true
    }
  },
  methods: {
      onSelectChange(selected){
          console.log(`我是 item ${this.name}, 收到 selected`, selected)
          if(Array.isArray(selected)){
              this.visible = selected.indexOf(this.name) >= 0
          }
      }
  },
  mounted(){
     this.eventBus && this.eventBus.$on('update:selected', this.onSelectChange)
  }
};
</script>
<style lang="scss" scoped>
.collapse-item {
    .title {
        background: #d9d9d9;
    }
    .title,.content {
        padding: 1em;
    }
  
}
</style>