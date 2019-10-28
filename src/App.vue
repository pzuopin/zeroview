<template>
  <div class="app">
    <z-collapse :selected="['1','2']">
      <z-collapse-item title='标题1' name='1'>内容1</z-collapse-item>
      <z-collapse-item title='标题2' name='2'>内容2</z-collapse-item>
      <z-collapse-item title='标题3' name='3'>内容3</z-collapse-item>
    </z-collapse>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
  methods: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.app {
  padding: 50px;
  border: 1px solid red;
}


</style>>