<template>
  <div class="z-view-collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "zViewCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      selectData: this.selected
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  methods:{
    onRemove(name){
      if(this.single){
        this.eventBus.$emit('update:selected',[])
      }else{
        const selectCopy = this.selectData.filter(select => select !== name)
        this.selectData = selectCopy
        this.eventBus.$emit('update:selected',selectCopy)
      }
    },
    onAdd(name){
      if(this.single){
        this.eventBus.$emit('update:selected',[name])
      }else{
        const selectCopy = [name].concat(this.selectData)
        this.selectData = selectCopy
        this.eventBus.$emit('update:selected',selectCopy)
      }
    }
  },
  mounted() {
    this.eventBus.$on('remove:selected',this.onRemove)
    this.eventBus.$on('add:selected',this.onAdd)
    if (this.single && this.selectData) {
      this.eventBus.$emit("update:selected", this.selectData.slice(0,1));
    } else {
      this.eventBus.$emit("update:selected", this.selectData);
    }
  }
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;
.z-view-collapse {
  border: 1px solid #d9d9d9;
  border-radius: $border-radius;
  &:first-child {
    //   border-top-color: red;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
  }
  &:last-child {
    //   border-bottom-color: yellow;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
  }
  :not(:first-child) {
    // background: pink;
    border-top: 1px solid #c3c3c3;
  }
}
</style>
