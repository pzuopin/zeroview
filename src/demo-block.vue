<template>
  <div class="demo-block">
    <div class="description" v-show="false">
      <slot name="description"></slot>
    </div>
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="html">
      <div class="demo-script">
        <slot name="highlight"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
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
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  border: 1px solid #ebebeb;
  border-radius: 3px;
  // padding: 24px;
  .source {
    padding: 24px;
  }

  .html {
    background: #fafafa;
    .demo-script {
      padding: 10px;
    }
  }
}
</style>
