<template>
  <button
    class="z-view-button"
    :class="{[`z-view-icon-${position}`]: true, [`z-view-button-${type}`]: true }"
    @click="$emit('click')"
  >
    <z-icon v-if="icon && !loading" :name="icon"></z-icon>
    <z-icon name="loading" v-if="loading" class="loading"></z-icon>
    <div class="z-view-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "../icon/icon.vue";
export default {
  name: "zViewButton",
  components: {
    "z-icon": Icon
  },
  props: {
    type: {
      type: String,
      default: "normal",
      validator(value) {
        return (
          [
            "normal",
            "primary",
            "dashed",
            "text",
            "success",
            "error",
            "warn",
            "info"
          ].indexOf(value) >= 0
        );
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.z-view-button {
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
  > .z-view-icon {
    order: 1;
    margin-right: 0.3em;
  }
  &-content {
    order: 2;
  }
  &.z-view-icon-right {
    > .z-view-button-content {
      order: 1;
    }
    > .z-view-icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
  .loading {
    animation: $spinAnimation;
  }
  &-primary {
    background: $--primary-color;
    border: none;
    color: white;
  }
  &-dashed {
    border-style: dashed;
  }
  &-text {
    border: none;
  }
  &-success {
    background: $--success-color;
    color: white;
    border: none;
  }
  &-warn {
    background: $--warn-color;
    color: white;
    border: none;
  }
  &-info {
    background: $--info-color;
    color: white;
    border: none;
  }
  &-error {
    background: $--error-color;
    color: white;
    border: none;
  }
}
</style>
