<template>
  <div>
    <div style="margin-top: 50px">
      <z-view-cascader :options="options" @update:selected="update" :selected="selected" :load-data="loadData"></z-view-cascader>
    </div>
  </div>
</template>


<script>
import db from "../db.js";
function ajax2(parentId = 0, successCallback) {
  let id = setTimeout(() => {
    let data = db.filter(item => item.parent_id === parentId);
    successCallback(data);
  }, 3000);
}
function ajax(parentId = 0) {
  let data = db.filter(item => item.parent_id === parentId);
  data.forEach(item => item.isLeaf = db.filter(p => p.parent_id === item.id).length <= 0)
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}
export default {
  components: {},
  name: "App",
  mounted() {},
  methods: {
    loadData(selectedOptions, resolve){
      console.log('App.vue loadData')
      console.log(selectedOptions)
      let targetOption = selectedOptions[selectedOptions.length - 1]
      ajax(targetOption.id).then(data => {
        this.resolve(targetOption.id,data)
      })
    },
    update(newSelected) {
      console.log('App.vue newSelected: ', newSelected)
      console.log(newSelected);
      this.selected = newSelected
    },
    resolve(selectId,data){
      this.found = false
      let target = this.options.find(option => option.id === selectId)
      if(target){
        this.found = true
        console.log(1)
        console.log(target)
        target.children = data
      }else if(!this.found){
        this.options.forEach(option => {
          if(!this.found){
            this.resolveChildren(selectId, data, option.children)
          }
        })
      }
      this.options = JSON.parse(JSON.stringify(this.options))
    },
    resolveChildren(selectId, data, children){
      if(children && children.length > 0){
        let target = children.find(option => option.id === selectId)
        if(target){
          console.log(2)
        console.log(target)
          this.found = true
          target.children = data
        }
      }
    }
  },
  data() {
    return {
      selected: [],
      options: [],
      found: false,
    };
  },
  mounted() {
    ajax().then(data => {
      this.options = data;
    });
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  &:hover,
  &:visited,
  &:active {
    // text-decoration: unset;
    color: unset;
  }
  text-decoration: unset;
}
ul,
ol {
  list-style: none;
}
</style>>
