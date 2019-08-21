import chai, { expect } from "chai";
import sinon from "sinon";
import Vue from "vue";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Input from "@/components/input.vue";
chai.use(sinonChai);

describe("Input.vue", () => {
  it("存在", () => {
    expect(Input).to.be.exist;
  });
  describe("props 属性", () => {
    it("接收 value 属性", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: "1234"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.eq("1234");
      vm.$destroy()
    });

    it("接收 disabled 属性", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.eq(true);
      vm.$destroy()
    });

    it("接收 readonly 属性", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.eq(true);
      vm.$destroy()
    });

    it("接收 error 属性", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          error: "error info"
        }
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.eq("#icon-error");
      const errorMsg = vm.$el.querySelector(".error-msg");
      expect(errorMsg.innerText).to.eq("error info");
      vm.$destroy()
    });
  });
});
