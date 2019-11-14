<template>
  <div>
    input-example
    <my-markdown />
  </div>
</template>
<script>
export default {
  components: {
    "my-markdown": () => import("./input.md")
  }
};
</script>
<style lang="scss" scoped>
</style>
