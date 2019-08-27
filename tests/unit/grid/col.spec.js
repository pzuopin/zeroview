import chai, { expect } from "chai";
import sinon from "sinon";
import Vue from "vue";
import sinonChai from "sinon-chai";
import Col from "@/components/grid/col.vue";
chai.use(sinonChai);

describe("Col.vue", () => {
  it("存在", () => {
    expect(Col).to.be.exist;
  });
});
