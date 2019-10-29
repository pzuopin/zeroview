<template>
    <ul class="menu" :class="classes">
        <slot></slot>
    </ul>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'zViewMenu',
    props: {
        selected: {
            type: String,
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    computed:{
        classes(){
            return [`direction-${this.direction}`]
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected', this.selected)
    }
}
</script>
<style lang="scss" scoped>
.menu {
    // border: 1px solid blue;
    border-right: 1px solid #ccc;
    display: flex;
    &.direction-horizontal {

    }

    &.direction-vertical {
        flex-direction: column;
    }
    &:hover {
        cursor: pointer;
    }
}
</style>