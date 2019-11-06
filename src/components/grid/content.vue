<template>
    <div class="z-view-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'zViewContent'
}
</script>
<style lang="scss" scoped>
.z-view-content {
    flex-grow: 1;
}
</style>
