<template>
  <div>
    <z-row>
      <z-col
        span="6"
        :phone="{span:12}"
        :ipad="{span:10}"
        :narrowPc="{span:8}"
        :widePc="{span:4}"
      >
        <div class="demo"></div>
      </z-col>
      <z-col
        span="6"
        :phone="{span: 12}"
        :ipad="{span:14}"
        :narrowPc="{span:16}"
        :widePc="{span:20}"
      >
        <div class="demo"></div>
      </z-col>
    </z-row>
    <z-row>
      <z-col span="4">
        <div class="demo"></div>
      </z-col>
      <z-col span="20">
        <div class="demo"></div>
      </z-col>
    </z-row>
    <h3>响应式</h3>
    <z-row>
      <z-col :phone="{span: 24}" :ipad="{span: 8}" span=6>
        <div class="demo"></div>
      </z-col>
      <z-col :phone="{span: 24}" :ipad="{span: 8}" span=6>
        <div class="demo"></div>
      </z-col>
      <z-col :phone="{span: 24}" :ipad="{span: 8}" span=6>
        <div class="demo"></div>
      </z-col>
      <z-col :phone="{span: 24}" :ipad="{span: 8}" span=6>
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
  height: 20px;
  border: 1px solid #000;
}
</style>>