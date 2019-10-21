<template>
  <button class="z-button" :class="{[`z-icon-${position}`]: true }" 
  @click="$emit('click')">
    <z-icon v-if='icon && !loading' :name='icon'></z-icon>
    <z-icon name='loading' v-if="loading" class="loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon'
export default {
  // props: ["icon","position"],
  name: 'zViewButton',
  components: {
    'z-icon': Icon
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
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

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
.z-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $--font-size;
  height: $--button-height;
  padding: 0 1em;
  vertical-align: middle;
  border-radius: $--border-radius;
  border: 1px solid $--border-color;
  background: $--button-bg;
  &:hover {
    border-color: $--border-color-hover;
  }
  &:active {
    background: $--button-active-bg;
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
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
