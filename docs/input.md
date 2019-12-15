## Input 输入框

常用的输入框。

### 基础用法

基础的输入框用法。

:::demo 使用 `value`， `disabled`， `error` 属性来定义样式。

```html
<z-view-input value='基本'/>
<z-view-input value='禁用' disabled/>
<z-view-input error="不允许为空"/>
<z-view-input value='只读' readonly/>
```
:::

### 属性 API
| 参数      | 说明    | 类型      | 可选值       | 默认值   | 必填 |
|---------- |-------- |---------- |-------------  |-------- | ------- |
| value     | input 的值   | string    |   -  |     -    | 否 |
| disabled     | 是否禁用   | boolean    |   -  |     false    | 否 |
| error     | 提示错误信息   | string    |   -  |     -    | 否 |
| readonly     | 是否只读  | boolean   |   -  |     false    | 否 |



