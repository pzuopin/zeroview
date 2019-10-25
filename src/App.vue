<template>
  <div class="app">
    <div class="xxx">
      <z-popover>
        <template slot="content">
          <div>popover内容1</div>
        </template>
        <z-button>点我1</z-button>
      </z-popover>
      <z-popover>
        <template slot="content">
          <div>popover内容2</div>
        </template>
        <z-button>点我2</z-button>
      </z-popover>
    </div>
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
  // width: 3500px;
}
.xxx {
  // margin-left: 2000px;
}
</style>>