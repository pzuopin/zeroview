<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = false
  keys.forEach((key) => {
    if(['offset', 'span'].includes(key)){
      valid = true
    }
  })
  return valid
}
export default {
  name: "zViewCol",
  props: {
    // 默认是 phone 样式
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      const { span, offset, ipad, narrowPc, pc, widePc } = this
      let ipadClass = [], narrowPcClass = [],
      pcClass = [],
      widePcClass = []
      if(ipad){
        let { span, offset } = ipad
        ipadClass = [span && `col-ipad-${span}`,
        offset && `offset-ipad-${offset}`]
      }
      if(narrowPc){
        let { span, offset } = narrowPc
        narrowPcClass = [span && `col-narrow-pc-${span}`,
        offset && `offset-narrow-pc-${offset}`]
      }
      if(pc){
        let { span, offset } = pc
        pcClass = [span && `col-pc-${span}`,
        offset && `offset-pc-${offset}`]
      }
      if(widePc){
        let { span, offset } = widePc
        widePcClass = [span && `col-wide-pc-${span}`,
        offset && `offset-wide-pc-${offset}`]
      }
      
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        [...ipadClass],
        [...narrowPcClass],
        [...pcClass],
        [...widePcClass]
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
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

  @media (min-width: 577px){
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $offset: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px){
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $offset: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 992px){
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $offset: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 1200px){
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $offset: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  
}
</style>