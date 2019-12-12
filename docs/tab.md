## Tab 标签页
选项卡的切换组件

### 基础用法
可以设置默认激活的选项卡

:::demo 设置默认第一个选项卡激活，也可以设置 disabled 的选项卡
```html
<z-view-tabs selected="2">
  <z-view-tabs-head>
    <z-view-tabs-item name="1">标签一</z-view-tabs-item>
    <z-view-tabs-item name="2">标签二</z-view-tabs-item>
    <z-view-tabs-item name="3">标签三</z-view-tabs-item>
    <z-view-tabs-item name="4" disabled>标签四</z-view-tabs-item>
  </z-view-tabs-head>
  <z-view-tabs-body>
    <z-view-tabs-pane name="1">标签一的内容</z-view-tabs-pane>
    <z-view-tabs-pane name="2">标签二的内容</z-view-tabs-pane>
    <z-view-tabs-pane name="3">标签三的内容</z-view-tabs-pane>
    <z-view-tabs-pane name="4">标签四的内容</z-view-tabs-pane>
  </z-view-tabs-body>
</z-view-tabs>
```
:::

