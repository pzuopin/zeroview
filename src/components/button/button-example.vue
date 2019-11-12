<template>
  <div>
    <h3>Button 按钮</h3>
    <div class="button-basic">
      <p>基本用法</p>
      <z-view-button>基本</z-view-button>
      <z-view-button type="primary">主要</z-view-button>
      <z-view-button type="dashed">虚线</z-view-button>
      <z-view-button type="text">无边框</z-view-button>
      <div class="button-code">
        <pre>
          <code>

          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
export default {
  data() {
    return {
      x: `<z-view-button>基本</z-view-button>
          <z-view-button type="primary">主要</z-view-button>
          <z-view-button type="dashed">虚线</z-view-button>
          <z-view-button type="text">无边框</z-view-button>
          `
    };
  },
  mounted() {
    hljs.configure({
      useBR: true
    });
    let x = hljs.highlight("html", this.x).value;
    this.$el.querySelector(".button-code pre code").innerHTML = x;
  }
};
</script>
<style lang="scss" scoped>
.button-basic {
  .z-view-button {
    margin: 5px;
  }
}

.button-code {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: #fff;
  border: 1px solid $--border-color;
  code {
    font-size: 16px;
    white-space: pre-line;
  }
}
</style>
