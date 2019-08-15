<template>
  <button class="z-button" :class="{[`icon-${position}`]: true }">
    <svg v-if='icon' class="icon">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["icon","position"]
};
</script>

<style lang="scss">
.z-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  vertical-align: middle;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: .3em;
      margin-right: 0;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
}
</style>
