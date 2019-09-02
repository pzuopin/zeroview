<template>
  <div>
    <button @click="showToast">show toast</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted(){
    this.showToast()
  },
  methods: {
    showToast(){
      this.$toast('lalala', {
        autoClose: false,
        autoCloseDelay: 3,
        closeButton: {
          text: '关闭',
          callback: ()=>{
            console.log('用户说它知道了')
          }
        }
      })
    }
  }
};
</script>

<style lang="scss">

</style>>