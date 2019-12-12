## Collapse 折叠面板

可以折叠/展开的内容区域

### 基础用法
默认可以同时打开多个面板，可以设置默认打开哪几个。

:::demo 设置 selected 属性默认打开哪个面板
```html
<z-view-collapse :selected="['2','3']">
 <z-view-collapse-item title="Panel Header 1" name="1">好好学习，天天向上</z-view-collapse-item>
 <z-view-collapse-item title="Panel Header 2" name="2">好好学习，天天向上</z-view-collapse-item>
 <z-view-collapse-item title="Panel Header 3" name="3">好好学习，天天向上</z-view-collapse-item>
</z-view-collapse>
```
:::

:::demo 指定 single 属性同一时刻只允许打开单个面板
```html
<z-view-collapse single :selected="['2','3']">
 <z-view-collapse-item title="Panel Header 1" name="1">好好学习，天天向上</z-view-collapse-item>
 <z-view-collapse-item title="Panel Header 2" name="2">好好学习，天天向上</z-view-collapse-item>
 <z-view-collapse-item title="Panel Header 3" name="3">好好学习，天天向上</z-view-collapse-item>
</z-view-collapse>
```
:::