import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'
chai.use(sinonChai)

describe('Button.vue', () => {
  it('存在', () => {
    expect(Button).to.be.exist
  })

  it('可以设置icon',()=>{
      const wrapper = mount(Button, {
          propsData: {
              icon: 'like'
          }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes()['href']).to.eq('#icon-like')
  })

  it('可以设置loading',()=>{
      const wrapper = mount(Button, {
          propsData: {
              icon: 'like',
              loading: true
          }
      })
      const vm = wrapper.vm
      const useElement = vm.$el.querySelectorAll('use')
      expect(useElement.length).to.eq(1)
      expect(useElement[0].getAttribute('xlink:href')).to.equal('#icon-loading')
  })

  it('icon 默认的 order 是1', ()=>{
      const wrapper = mount(Button, {
          attachToDocument: true,
          propsData: {
              icon: 'like'
          }
      })
      const vm = wrapper.vm
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('1')
      wrapper.destroy()
  })

  it('设置 position 可以改变 icon 的 order', ()=>{
      const wrapper = mount(Button, {
          attachToDocument: true,
          propsData: {
              icon: 'like',
              position: 'right'
          }
      })
      const vm = wrapper.vm
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
      wrapper.destroy()
  })

  it('点击 button 触发 click 事件', ()=>{
      const wrapper = mount(Button, {
          propsData: {
              icon: 'like'
          }
      })
      const vm = wrapper.vm
      const callback = sinon.fake()
      vm.$on('click',callback)
      vm.$el.click()
      expect(callback).to.have.been.called
  })
})
