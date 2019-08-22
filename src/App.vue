<template>
  <div>
    <z-row class="topbar">
      <z-col span="9" class="demoBox">
        <z-row>
          <z-col>1</z-col>
          <z-col>2</z-col>
          <z-col>3</z-col>
          <z-col>4</z-col>
        </z-row>
      </z-col>
      <z-col span="15" class="demoBox">
        <z-row align='right'>
          <z-col>1</z-col>
          <z-col>2</z-col>
          <z-col>3</z-col>
          <z-col>4</z-col>
          <z-col>5</z-col>
          <z-col>6</z-col>
          <z-col>7</z-col>
        </z-row>
      </z-col>
    </z-row>
    <z-row class="logo-and-search-and-qrcode">
      <z-col span="4" class="demoBox">
        <z-row align='center'>
          <z-col>
            <div class="logo-wrapper">
              <img src="https://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png" alt="taobao">
            </div>
          </z-col>
        </z-row>
      </z-col>
      <z-col span="14" class="demoBox"></z-col>
      <z-col span="6" class="demoBox"></z-col>
    </z-row>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // window.setTimeout(() => {
    //   let event = new Event("change");
    //   let inputElement = this.$el.querySelector("input");
    //   inputElement.dispatchEvent(event);
    //   console.log("trigger change");
    // }, 3000);
  },
  data() {
    return {
      message: 'hi',
      loading1: true,
      loading2: true,
      loading3: true
    };
  },
  methods: {
    click1() {
      this.loading1 = !this.loading1;
      console.log("clicked 1 ...");
    },
    click2() {
      this.loading2 = !this.loading2;
      console.log("clicked 2 ...");
    },
    click3() {
      this.loading3 = !this.loading3;
      console.log("clicked 3 ...");
    },
    inputChange(event) {
      console.log('event',event)
      console.log(event.target.value);
    }
  }
};
</script>

<style lang="scss">
#app {
  margin: 20px;
  border: 1px solid #000;
  .box {
    > * {
      margin-right: 10px;
    }
  }
}
.demoBox {
  min-height: 50px;
  // background: lightblue;
  border: 1px solid #000;
}
.logo-wrapper {
  padding: 10px;
}
</style>>