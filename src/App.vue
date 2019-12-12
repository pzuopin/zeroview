<template>
  <div>
    <z-view-collapse :selected="['2','3']">
      <z-view-collapse-item title="标题1" name="1">内容1</z-view-collapse-item>
      <z-view-collapse-item title="标题2" name="2">内容2</z-view-collapse-item>
      <z-view-collapse-item title="标题3" name="3">内容3</z-view-collapse-item>
    </z-view-collapse>
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
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
.app {
  width: 600px;
  margin: 50px;
}
</style>>
