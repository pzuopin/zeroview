<template>
  <div class="app">
    <z-button>button</z-button>
    <z-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我1</button>
    </z-popover>
    <z-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我2</button>
    </z-popover>
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
  padding: 200px 200px 0 200px;
  border: 1px solid red;
}
</style>>