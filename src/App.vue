<template>
  <div class="app">
    <div class="xxx">
      <z-menu direction="vertical">
        <!-- <z-menu-item name="1">菜单1</z-menu-item>
        <z-menu-item name="2">菜单2</z-menu-item>
        <z-menu-item name="3">菜单3</z-menu-item>
        <z-sub-menu name="4">
          <template slot="title">次级菜单1</template>
          <z-menu-item name="4-1">菜单1-1</z-menu-item>
          <z-menu-item name="4-2">菜单1-2</z-menu-item>
        </z-sub-menu> -->
        <z-sub-menu name="5">
          <template slot="title">次级菜单2</template>
          <z-menu-item name="5-1">菜单2-1</z-menu-item>
          <z-menu-item name="5-2">菜单2-2</z-menu-item>
          <z-sub-menu name="6">
            <template slot="title">次级菜单3</template>
            <z-menu-item name="6-1">菜单3-1</z-menu-item>
            <z-menu-item name="6-2">菜单3-2</z-menu-item>
            <z-sub-menu name="7">
              <template slot="title">次级菜单4</template>
              <z-menu-item name="7-1">菜单4-1</z-menu-item>
              <z-menu-item name="7-2">菜单4-2</z-menu-item>
            </z-sub-menu>
            <z-sub-menu name="8">
              <template slot="title">次级菜单5</template>
              <z-menu-item name="8-1">菜单5-1</z-menu-item>
              <z-menu-item name="8-2">菜单5-2</z-menu-item>
            </z-sub-menu>
          </z-sub-menu>
        </z-sub-menu>
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
  .xxx {
    width: 600px;
    margin: 50px;
  }
}
</style>>