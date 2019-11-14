<template>
  <div class="demo-block">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="highlight">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>
<script>
import hljs from "highlight.js";
export default {
  name: "DemoBlock",
  mounted() {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }
};
</script>
<style lang="scss" scoped>
.highlight {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
