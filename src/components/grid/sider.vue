<template>
  <transition name="fade">
    <div class="z-view-sider" v-if="visible">
      <slot></slot>
      <!-- <button @click="visible = false">close</button> -->
    </div>
  </transition>
</template>
<script>
export default {
  name: "zViewSider",
  data() {
    return {
      visible: true
    };
  }
};
</script>
<style lang="scss" scoped>
.z-view-sider {
  flex-shrink: 0;
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
