<template>
  <div id="app">
    <div>
      <z-row>
        <z-col></z-col>
        <z-col></z-col>
      </z-row>
      <z-row>
        <z-col></z-col>
        <z-col></z-col>
        <z-col></z-col>
      </z-row>
      <z-row>
        <z-col></z-col>
        <z-col></z-col>
        <z-col></z-col>
        <z-col></z-col>
      </z-row>
      <z-row>
        <!-- 这是字符串的2 -->
        <z-col span="2"></z-col>
        <!-- 这是数字22 -->
        <z-col :span="22" offset='2'></z-col>
      </z-row>
      <z-row>
        <z-col span='3'></z-col>
        <z-col span='18' offset='3'></z-col>
      </z-row>
      <z-row>
        <z-col span='4'></z-col>
        <z-col span='10' offset="2"></z-col>
        <z-col span='4' offset="4"></z-col>
      </z-row>
  
      
    </div>
    <div class="box">
      <!-- <z-input value="张三" disabled></z-input>
        <z-input value="张三" :disabled="true"></z-input>
        <z-input value="张三" :readonly="true"></z-input>
      <z-input value="张三"></z-input>-->
    </div>
    <div class="box">
      <z-input v-model="message"></z-input>
      {{message}}
    </div>
    <div>
      <z-button :loading="loading1" @click="click1">按钮</z-button>
      <z-button icon="setting" :loading="loading2" @click="click2">按钮</z-button>
      <z-button icon="setting" position="right" @click="click3" :loading="loading3">按钮</z-button>
      <z-button-group>
        <z-button icon="down" :loading="false">按钮</z-button>
        <z-button icon='wechat'>微信</z-button>
        <z-button icon="like" position="right">按钮</z-button>
      </z-button-group>
      <z-button-group>
        <div>
          <z-button icon="down" :loading="false">按钮</z-button>
        </div>
        <z-button icon="like" position="right">按钮</z-button>
      </z-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.setTimeout(() => {
      let event = new Event("change");
      let inputElement = this.$el.querySelector("input");
      inputElement.dispatchEvent(event);
      console.log("trigger change");
    }, 3000);
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
</style>>