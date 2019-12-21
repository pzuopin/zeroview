<template>
  <div>
    <div style="margin-top: 50px">
      <z-view-cascader :options="options" @update:selected="update" :selected.sync="selected"></z-view-cascader>
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
    update(newSelected) {
      console.log(newSelected);
      ajax(newSelected[0].id).then(data => {
        let lastSelected = this.selected.filter(
          item => item.id === newSelected[0].id
        )[0];
        // lastSelected.children = data;
        this.$set(lastSelected, "children", data);
        console.log(222);
        console.log(lastSelected);
      });
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
