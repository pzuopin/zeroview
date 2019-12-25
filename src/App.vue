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
    loadData(selectedOptions){
      console.log('App.vue loadData')
      console.log(selectedOptions)
      let targetOption = selectedOptions[selectedOptions.length - 1]
      ajax(targetOption.id).then(data => {
        console.log('data')
        console.log(data)
        // TODO 这里找的是第一层的，这里不对
        let target = this.options.find(option => option.id === targetOption.id)
        target.children = data
        this.options = JSON.parse(JSON.stringify(this.options))
      })
    },
    update(newSelected) {
      console.log('App.vue newSelected: ', newSelected)
      console.log(newSelected);
      this.selected = newSelected
    }
  },
  data() {
    return {
      selected: [],
      options: []
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
