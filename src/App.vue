<template>
  <div>
    <div style="margin-top: 50px">
      <z-view-cascader :options="options" @update:selected="update" :selected="selected" :load-data="loadData" :loading="loading"></z-view-cascader>
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
    }, 300);
  });
}
export default {
  components: {},
  name: "App",
  mounted() {},
  methods: {
    loadData(selectedOptions, resolve){
      let targetOption = selectedOptions[selectedOptions.length - 1]
      // this.loading.push(targetOption.id)
      // this.loading = Array.from(new Set(this.loading))
      // console.log(this.loading)
      if(this.loading.indexOf(targetOption.id) < 0){
        this.loading.push(targetOption.id)
        // console.log(this.loading)
      }
      ajax(targetOption.id).then(data => {
        this.loading = this.loading.filter(id => id !== targetOption.id)
        this.resolve(targetOption.id,data)
      })
    },
    update(newSelected) {
      this.selected = newSelected
    },
    resolve(selectId,data){
      this.found = false
      let target = this.options.find(option => option.id === selectId)
      if(target){
        this.found = true
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
      loading: []
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
