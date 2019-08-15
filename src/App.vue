<template>
  <div id="app">
    
    <z-button>按钮</z-button>
    <z-button icon='setting'>
      按钮
    </z-button>
    <z-button icon='setting' position='right'>按钮</z-button>
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

<style lang="scss">
  #app {
    margin: 20px;
  }
  
</style>>