<template>
    <div class="toast">

    </div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.$toast = function(){
    console.log('I am toast')
}
export default {
    name: 'zViewToast'
}
</script>
<style lang="scss" scoped>

</style>