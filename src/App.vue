<template>
  <div id="app">
    <z-button :loading="loading1" @click="click1">按钮</z-button>
    <z-button icon="setting" :loading="loading2" @click="click2">按钮</z-button>
    <z-button icon="setting" position="right" @click="click3" :loading="loading3">按钮</z-button>
    <z-button-group>
      <z-button icon="down" :loading="false">按钮</z-button>
      <z-button icon="like" position="right">按钮</z-button>
    </z-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading1: true,
      loading2: true,
      loading3: true
    };
  },
  methods: {
    click1() {
      this.loading1 = !this.loading1;
      console.log("clicked 1 ...");
    },
    click2() {
      this.loading2 = !this.loading2;
      console.log("clicked 2 ...");
    },
    click3() {
      this.loading3 = !this.loading3;
      console.log("clicked 3 ...");
    }
  }
};
</script>

<style lang="scss">
#app {
  margin: 20px;
}
</style>>