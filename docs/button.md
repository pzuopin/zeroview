## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<z-view-button @click="onClick">基本</z-view-button>
<z-view-button type="primary">主要</z-view-button>
<z-view-button type="dashed">虚线</z-view-button>
<z-view-button type="text">无边框</z-view-button>

<script>
export default {
  methods: {
    onClick(){
      console.log('button onClicked..')
    }
  }
}

</script>
<style>
  .component-doc {
    border: 1px solid red;
  }
  .z-view-button {
    font-weight: bold;
  }
</style>
```
:::



