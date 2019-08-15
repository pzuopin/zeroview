<template>
  <button class="z-button" :class="{[`z-icon-${position}`]: true }">
    <!-- <svg v-if='icon' class="icon">
      <use :xlink:href="`#icon-${icon}`" />
    </svg> -->
    <z-icon :name='icon'></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // props: ["icon","position"],
  props: {
    icon: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  }
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
  > .z-icon {
    order: 1;
    margin-right: .3em;
  }
  > .content {
    order: 2;
  }
  &.z-icon-right {
    > .content {
      order: 1;
    }
    > .z-icon {
      order: 2;
      margin-left: .3em;
      margin-right: 0;
    }
  }
}
</style>
