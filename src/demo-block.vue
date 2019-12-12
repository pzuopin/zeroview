<template>
  <div class="demo-block">
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div class="content">
      <div class="source">
        <slot name="source"></slot>
      </div>
      <div class="html">
        <div class="demo-script">
          <slot name="highlight"></slot>
        </div>
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
  .description {
    > p {
      margin: 14px 0;
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }
  }
  .content {
    border-radius: 3px;
    border: 1px solid #ebebeb;
    padding: 24px;
  }

  .html {
    background: #fafafa;
    margin-top: 10px;
    .demo-script {
      padding: 5px;
    }
  }
}
</style>
