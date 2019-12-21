<template>
  <div class="demo-block">
    <div class="demo-content">
      <div class="source">
        <slot name="source"></slot>
      </div>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="html">
        <div class="code-wrapper">
          <div class="code-line"></div>
          <span class="code-toggle" v-show="!codeVisible" @click="codeVisible = true">&lt; 查看代码 &gt;</span>
          <span
            class="code-toggle"
            v-show="codeVisible"
            @click="codeVisible = false"
          >&lt; 隐藏代码 /&gt;</span>
        </div>

        <div class="demo-script" @click="codeVisible = !codeVisible" v-show="codeVisible">
          <slot name="highlight"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoBlock",
  data() {
    return {
      codeVisible: false
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.demo-block {
  border: 1px solid $border-color-ant-design;
  margin: 10px 0;
  padding: 10px 0;
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .description {
    > p {
      margin: 14px 20px;
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }
  }
  .demo-content {
    border-radius: 3px;
  }
  .code-line {
    border-bottom: 1px solid $border-color-ant-design;
  }
  .source {
    padding: 20px;
    border-bottom: 1px solid $border-color-ant-design;
  }
  .html {
    background: #fafafa;
    margin: 20px 0;
    .demo-script {
      padding: 5px;
    }
    .code-wrapper {
      position: relative;
    }
    .code-toggle {
      position: absolute;
      display: inline-block;
      padding: 2px 5px;
      background: $bg-white;
      border: 1px solid $border-color-ant-design;
      border-radius: $border-radius;
      font-size: 12px;
      color: #5e6d82;
      @extend %pos-center;
    }
  }
}
</style>
