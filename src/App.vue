<template>
  <div>
    <div>{{ selected[0] && selected[0].label || '空'}}</div>
    <div>{{ selected[1] && selected[1].label || '空'}}</div>
    <div>{{ selected[2] && selected[2].label || '空'}}</div>
    <z-view-cascader :options="options" :selected="selected" @update:selected="onUpdate($event)">
      <z-view-button>change location</z-view-button>
    </z-view-cascader>
  </div>
</template>


<script>
export default {
  components: {},
  name: "App",
  mounted() {},
  methods: {
    onUpdate(newSelected) {
      this.selected = newSelected;
    }
  },
  data() {
    return {
      selected: [],
      options: [
        {
          label: "四川",
          value: "sc",
          children: [
            {
              label: "成都",
              value: "cd",
              children: [
                {
                  label: "天府新区",
                  value: "tfxq",
                  children: [
                    {
                      label: "xxx",
                      value: "xxx"
                    }
                  ]
                },
                {
                  label: "高新区",
                  value: "gx"
                },
                {
                  label: "锦江区",
                  value: "jj"
                }
              ]
            },
            {
              label: "泸州",
              value: "lz",
              children: [
                {
                  label: "龙马潭区",
                  value: "lmtq"
                },
                {
                  label: "江阳区",
                  value: "jyq"
                }
              ]
            }
          ]
        },
        {
          label: "云南",
          value: "yn",
          children: [
            {
              label: "昆明",
              value: "km",
              children: [
                {
                  label: "官渡区",
                  value: "jkq"
                },
                {
                  label: "西山区",
                  value: "xsq"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  &:hover,
  &:visited,
  &:active {
    // text-decoration: unset;
    color: unset;
  }
  text-decoration: unset;
}
ul,
ol {
  list-style: none;
}
</style>>
