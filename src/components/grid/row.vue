<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'zViewRow',
    props: {
        gutter: {
            type: [Number, String]
        }
    },
    mounted(){
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        // border: 1px solid red;
        margin: 0 -10px;
    }
</style>