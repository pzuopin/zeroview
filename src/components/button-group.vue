<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.z-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .z-button {
        margin-left: -1px;
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


