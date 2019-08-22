<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: 'zViewButtonGroup',
    mounted(){
        for(let node of this.$el.children){
            if(node.nodeName.toLowerCase() !== 'button'){
                console.log(`z-button-group 的子元素应该全是 z-button，但是你写的${node.nodeName.toLowerCase()}`)
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.z-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .z-button {
        &:not(:first-child){
            margin-left: -1px;
        }
        &:hover {
            // border-color: var;
            position: relative;
            z-index: 1;
        }
        border-radius: 0;
        &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
}
</style>


