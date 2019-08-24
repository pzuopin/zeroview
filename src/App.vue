<template>
  <div>
    <z-row gutter="20">
      <z-col class='demo' span=4 
        :phone="{span:12}"
        :ipad="{span:10}"
        :narrowPc="{span:8}"
        :pc="{span:6}"
        :widePc="{span:4}">1</z-col>
      <z-col class='demo' span=20 
        :phone="{span: 12}"
        :ipad="{span:14}"
        :narrowPc="{span:16}"
        :pc="{span:18}"
        :widePc="{span:20}">22</z-col>
    </z-row>
    <z-row gutter="20">
      <z-col class='demo' span=4 >1</z-col>
      <z-col class='demo' span=20 >22</z-col>
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
  height: 20px;
  border: 1px solid #000;
}
</style>>