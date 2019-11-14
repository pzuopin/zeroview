<template>
  <div class="demo-block">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="highlight">
      <slot name='highlight'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoBlock'
}
</script>
