<template>
  <ul class="nav">
      {{namePath}}
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: "zViewNav",
  props: {
    selected: {
      type: String
    }
  },
  provide() {
    return {
      root: this
    };
  },
  data(){
      return {
          children: [],
          namePath: []
      }
  },
  methods:{
      addItem(vm){
          this.children.push(vm)
      },
      updateSelect(name){
        //   this.$children.forEach(vm => vm.onSelectChange(name))
        this.$emit('update:select',name)
      }
  },
  mounted() {
     let names =  this.children.map(vm => vm.name)
     console.log(names)
     this.children.forEach(vm => {
         vm.$on('update:select',vm.onSelectChange)
     })
  }
};
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  user-select: none;
  border-bottom: 1px solid #ccc;
}
</style>