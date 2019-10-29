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
        singleOpen: {
            type: Boolean
        },
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
            eventBus: new Vue(),
            openMenu:[]
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    methods:{
        onMenuOpen(name){
            if(this.singleOpen){
                this.eventBus.$emit('update:open',name)
            }
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected', this.selected)
        this.eventBus.$on('add:open',this.onMenuOpen)
        // this.eventBus.$on('remove:open',this.onMenuClose)
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