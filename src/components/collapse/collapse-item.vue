<template>
  <div class="z-view-collapse-item">
    <p class="z-view-collapse-item-title" @click="this.click">{{ this.title }}</p>
    <div class="z-view-collapse-item-content" :data-name="this.name" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "zViewCollapseItem",
  data() {
    return {
      visible: false
    };
  },
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    name: {
      type: String,
      default: "",
      required: true
    }
  },
  methods: {
    click() {
      this.visible = !this.visible;
      if (this.visible) {
        this.eventBus && this.eventBus.$emit("add:selected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("remove:selected", this.name);
      }
    },
    onSelectChange(selected) {
      if (Array.isArray(selected)) {
        this.visible = selected.indexOf(this.name) >= 0;
      }
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", this.onSelectChange);
  }
};
</script>
<style lang="scss" scoped>
.z-view-collapse-item {
  &-title {
    background: #d9d9d9;
  }
  &-title,
  &-content {
    padding: 1em;
  }
  // .content {
  //   border: none;
  // }
}
</style>
