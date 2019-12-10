## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用 `type` 属性来定义 Button 的样式。
```html
<z-view-button>基本</z-view-button>
<z-view-button type="primary">主要</z-view-button>
<z-view-button type="dashed">虚线</z-view-button>
<z-view-button type="text">无边框</z-view-button>
```
:::


:::demo 使用 `loading` 来指定加载中。
```html
<z-view-button :loading="loading" @click="click">基本</z-view-button>
<script>
export default {
  data(){
    return {
      loading: true
    }
  },
  methods: {
    click(){
      this.loading = !this.loading
    }
  }
}
</script>
:::

:::demo 使用 `icon` 来指定图标。
```html
<z-view-button icon="wechat">基本</z-view-button>
<z-view-button icon="setting">基本</z-view-button>
:::