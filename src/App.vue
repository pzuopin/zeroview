<template>
  <div class="app">
    <z-button icon='wechat' @click="showToast">showToast</z-button>
    <!-- <z-icon name='wechat'>11</z-icon> -->
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
  methods: {
    showToast(){
      this.$toast('hello', {
        position: 'bottom'
      })
    }
  },
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