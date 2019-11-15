<template>
  <div class="demo-block">
    <div class="description">
      <slot name='description'></slot>
    </div>
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
import 'highlight.js/styles/github.css';
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
.demo-block {

}

</style>
