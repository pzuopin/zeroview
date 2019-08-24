<template>
  <div>
    
    
    <z-row>
      <z-col span=24 :ipad="{span: 12}"
         :pc="{span: 8}"
         :wide-pc="{span: 6}"
         :narrow-pc="{span: 10}">
        <div class="demo"></div>
      </z-col>
      <z-col span=24 :ipad="{span: 12}"
         :pc="{span: 8}"
         :wide-pc="{span: 6}"
         :narrow-pc="{span: 10}">
        <div class="demo"></div>
      </z-col>
      <z-col span=24 :ipad="{span: 12}"
         :pc="{span: 8}"
         :wide-pc="{span: 6}"
         :narrow-pc="{span: 10}">
        <div class="demo"></div>
      </z-col>
      <z-col span=24 :ipad="{span: 12}"
         :pc="{span: 8}"
         :wide-pc="{span: 6}"
         :narrow-pc="{span: 10}">
        <div class="demo"></div>
      </z-col>
    </z-row>

  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.demo {
  height: 100px;
  border: 1px solid #000;
}
</style>>