<template>
  <div id="app">
    <z-button></z-button>
  </div>
</template>

<script>
import Button from "./components/Button";
export default {
  name: "App",
  components: {
    "z-button": Button
  }
};
</script>

<style lang="scss" scoped>
  #app {
    margin: 20px;
  }
</style>>