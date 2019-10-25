<template>
  <div class="app">
    <span class="xxx">
      <z-popover>
        <template slot="content">
          <div>我是内容我是内容2</div>
        </template>
        <z-button>点我1</z-button>
      </z-popover>
      <z-popover>
        <template slot="content">
          <div>我是内容我是内容2</div>
        </template>
        <z-button>点我2</z-button>
      </z-popover>
    </span>
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
.xxx {
  border: 1px solid blue;
  display: inline-block;
}

</style>>