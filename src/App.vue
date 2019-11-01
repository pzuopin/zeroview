<template>
  <div>
    <div class="app">
      <z-menu direction="vertical">
        <z-menu-item name="home">首页</z-menu-item>
        <z-sub-menu name="about">
          <template slot="title">关于</template>
          <z-menu-item name="culture">公司文化</z-menu-item>
          <z-menu-item name="team">团队建设</z-menu-item>
          <z-sub-menu name="contact">
            <template slot="title">contact</template>
            <z-menu-item name="mobile">mobile</z-menu-item>
            <z-menu-item name="uni">uni</z-menu-item>
            <z-menu-item name="tele">tele</z-menu-item>
            <z-sub-menu name="other-contact">
              <template slot="title">other contact</template>
              <z-menu-item name="qq">qq</z-menu-item>
              <z-menu-item name="wechat">wechat</z-menu-item>
              <z-menu-item name="douyin">douyin</z-menu-item>
            </z-sub-menu>
          </z-sub-menu>
        </z-sub-menu>
        <z-menu-item name="other">其他</z-menu-item>
      </z-menu>
    </div>
    <div class="app">
      <z-menu>
        <z-menu-item name="home">首页</z-menu-item>
        <z-sub-menu name="about">
          <template slot="title">关于</template>
          <z-menu-item name="culture">公司文化</z-menu-item>
          <z-menu-item name="team">团队建设</z-menu-item>
          <z-sub-menu name="contact">
            <template slot="title">联系方式</template>
            <z-menu-item name="mobile">mobile</z-menu-item>
            <z-menu-item name="uni">uni</z-menu-item>
            <z-menu-item name="tele">tele</z-menu-item>
            <z-sub-menu name="other-contact">
              <template slot="title">其他联系</template>
              <z-menu-item name="qq">qq</z-menu-item>
              <z-menu-item name="wechat">wechat</z-menu-item>
              <z-menu-item name="douyin">douyin</z-menu-item>
            </z-sub-menu>
          </z-sub-menu>
        </z-sub-menu>
        <z-menu-item name="other">其他</z-menu-item>
      </z-menu>
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
  width: 600px;
  margin: 50px;
}
</style>>
