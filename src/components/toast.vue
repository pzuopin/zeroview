<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "zViewToast"
};
</script>
<style lang="scss" scoped>
.toast {
    $toast-bg: rgba(0,0,0, 0.75);
    $font-size: 14px;
    $toast-height: 40px;
    // border: 1px solid red;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 16px;
    color: white;
    background: $toast-bg;
    height: $toast-height;
    font-size: $font-size;
    line-height: 1.8;
    border-radius: 4px;
    display: flex;
    align-items: center;
}
</style>