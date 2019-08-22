<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
  >
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data(){
      return {
          gutter: 0
      }
  }
};
</script>
<style lang="scss" scoped>
.col {
//   height: 100px;
  //   background: lightblue;
  width: 50%;
//   padding: 0 10px;
  //   border: 1px solid red;
  // scss 的 loop
  $class-prefix: col-;

  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $offset: offset-;
  @for $n from 1 through 24 {
    &.#{$offset}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>