## Popover 弹出框

常用的基础弹出消息框

### 基础用法
可以用在按钮上弹出提示

:::demo 默认 hover 弹出提示
```html
<z-view-popover>
  <template slot='content'>
    <p>Hello World~</p>
  </template>
  <z-view-button>上方弹出</z-view-button>
</z-view-popover>
<z-view-popover position="bottom">
  <template slot='content'>
    <p>Hello World~</p>
  </template>
  <z-view-button>下方弹出</z-view-button>
</z-view-popover>

```
:::

:::demo 可以指定 click 方式弹出
```html
<z-view-popover trigger="click" position="left">
  <template slot='content'>
    <p>Hello World~</p>
  </template>
  <z-view-button>点击左方弹出</z-view-button>
</z-view-popover>
<z-view-popover trigger="click" position="right">
  <template slot='content'>
    <p>Hello World~</p>
  </template>
  <z-view-button>点击右方弹出</z-view-button>
</z-view-popover>

```
:::

### 属性 API
| 参数      | 说明    | 类型      | 可选值       | 默认值   | 必填 |
|---------- |-------- |---------- |-------------  |-------- | ------- |
| trigger     | 触发方式   | string    |   click / hover  |     hover    | 否 |
| position     | 弹出方位   | string    |   top / bottom / left / right  |     top    | 否 |