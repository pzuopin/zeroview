<template>
  <div>
    <div style="margin-top: 50px">
      <z-view-cascader :options="options" :selected.sync="selected"></z-view-cascader>
    </div>
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
          label: "Sichuan",
          value: "sc",
          children: [
            {
              label: "Chengdu",
              value: "cd",
              children: [
                {
                  label: "高新区区",
                  value: "gx1"
                },
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
                  label: "高新区区",
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
          label: "zhejiang",
          value: "yn",
          children: [
            {
              label: "hangzhou",
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
