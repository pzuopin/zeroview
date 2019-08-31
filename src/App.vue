<template>
  <div>
    <button @click="showToast">show toast</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    showToast(){
      this.$toast('lalala')
    }
  }
};
</script>

<style lang="scss">

</style>>