<template>
  <div class="app">
    <z-nav>
      <z-nav-item name="home">首页</z-nav-item>
      <z-sub-nav name="about">
        <template slot="title">关于</template>
        <z-nav-item name="culture">公司文化</z-nav-item>
        <z-nav-item name="team">团队建设</z-nav-item>
        <z-nav-item name="contact">联系方式</z-nav-item>
      </z-sub-nav>
      <z-nav-item name="other">其他</z-nav-item>
    </z-nav>
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
  width: 600px;
  margin: 50px;
}
</style>>