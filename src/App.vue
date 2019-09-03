<template>
  <div>
    <button @click="showToast">show toast</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.showToast();
  },
  methods: {
    showToast() {
      this.$toast(
        // '你好',
        '<strong>加粗文字</strong><p>段落</p><a href="http://baidu.com">百度</a><br>很多很多文字很多很多文字很多很多文字很多很多文字很多很多文字很多很多文字很多很多文字很多很多文字很多很多文字很多很多文字看到我了',
        {
          enableHTML: true,
          autoClose: false,
          autoCloseDelay: 3,
          // content: '你好',
          closeButton: {
            text: "关闭",
            callback: () => {
              console.log("用户说它知道了");
            }
          }
        }
      );
    }
  }
};
</script>

<style lang="scss">
</style>>