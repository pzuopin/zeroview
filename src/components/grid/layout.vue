<template>
    <div class="z-view-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'zViewLayout',
    data(){
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted(){
        console.log(this.$children)
        this.$children.forEach((vm) => {
            if(vm.$options.name === 'zViewSider'){
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.z-view-layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider {
        flex-direction: row;
    }
}
</style>
