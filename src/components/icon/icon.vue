<template>
    <svg v-if='name' class="z-icon">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
</template>
<script>
export default {
    name: 'zViewIcon',
    props: {
        name:{
            type: String,
            default:'',
            validator(value){
                return value !== undefined
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    .z-icon {
        width: 1em;
        height: 1em;
    }
</style>


