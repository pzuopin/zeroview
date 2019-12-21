<template>
  <div>
    <div style="margin-top: 50px">
      <z-view-cascader :options="options" :selected.sync="selected"></z-view-cascader>
    </div>
  </div>
</template>


<script>
import db from "../db.js";
function ajax(parentId = 0) {
  return db.filter(item => item.parent_id === parentId);
}
console.log(ajax());
let data = ajax();
export default {
  components: {},
  name: "App",
  mounted() {},
  methods: {},
  data() {
    return {
      selected: [],
      options: data
    };
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
