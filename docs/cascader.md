## Cascader 级联选择

常用于省市区，公司层级的关联选择。

:::demo 基础的省市区级联
```html
<z-view-cascader :options="options" :selected.sync="selected"></z-view-cascader>

<script>
export default {
  data(){
    return {
      options: [
        {
          id: '1',
          label: '四川',
          children: [
            {
              id: '1-1',
              label: '成都市',
              children: [
                {
                  id: '1-1-1',
                  label: '高新区'
                },
                {
                  id: '1-1-2',
                  label: '锦江区'
                },
                {
                  id: '1-1-3',
                  label: '金牛区'
                },
              ]
            },
            {
              id: '1-2',
              label: '泸州市',
              children: [
                {
                  id: '1-2-1',
                  label: '纳西区'
                },
                {
                  id: '1-2-2',
                  label: '江阳区'
                },
                {
                  id: '1-3-3',
                  label: '龙马谭区'
                },
              ]
            },
          ]
        },
        {
          id: '2',
          label: '重庆市',
          children: [
            {
              id: '2-1',
              label: '渝中区'
            },
            {
              id: '2-2',
              label: '北培区'
            }
          ]
        }
      ],
      selected: []
    }
  }
}
</script>
```
:::




### 属性 API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options | 可选项 | array | - | [] |
| selected | 选择项 | array | - | [] | 