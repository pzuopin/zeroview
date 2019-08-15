<template>
  <div id="app">
    <z-button :loading="true">按钮</z-button>
    <z-button icon='setting' :loading="true">
      按钮
    </z-button>
    <z-button icon='setting' position='right' :loading="true">按钮</z-button>
    <z-button icon='down' :loading="false">
      按钮
    </z-button>
    <z-button icon='like' position='right'>按钮</z-button>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
  #app {
    margin: 20px;
  }
  
</style>>