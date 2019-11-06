import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Menu from '@/components/menu/menu'
import SubMenu from '@/components/menu/sub-menu'
import MenuItem from '@/components/menu/menu-item'

chai.use(sinonChai)

describe('Menu.vue', () => {
  it('存在', () => {
    expect(Menu).to.be.exist
  })
  it('接受 selected 属性', (done) => {
    Vue.component('z-sub-menu', SubMenu)
    Vue.component('z-menu-item', MenuItem)
    const wrapper = mount(Menu, {
      propsData: {
        'selected': 'home'
      },
      slots: {
        default: `
          <z-menu-item name="home">首页</z-menu-item>
          <z-sub-menu name="about">
            <template slot="title">关于</template>
            <z-menu-item name="culture">公司文化</z-menu-item>
            <z-menu-item name="team">团队建设</z-menu-item>
            <z-sub-menu name="contact">
              <template slot="title">contact</template>
              <z-menu-item name="mobile">mobile</z-menu-item>
              <z-menu-item name="uni">uni</z-menu-item>
              <z-menu-item name="tele">tele</z-menu-item>
              <z-sub-menu name="other-contact">
                <template slot="title">other contact</template>
                <z-menu-item name="qq">qq</z-menu-item>
                <z-menu-item name="wechat">wechat</z-menu-item>
                <z-menu-item name="douyin">douyin</z-menu-item>
              </z-sub-menu>
            </z-sub-menu>
          </z-sub-menu>
          <z-menu-item name="other">其他</z-menu-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].active').exists()).to.be.true
      done()
    })
  })
  it('会触发 update:selected 事件', (done) => {
    Vue.component('z-sub-menu', SubMenu)
    Vue.component('z-menu-item', MenuItem)
    const fake = sinon.fake()
    const wrapper = mount(Menu, {
      propsData: {
        'selected': 'home'
      },
      slots: {
        default: `
          <z-menu-item name="home">首页</z-menu-item>
          <z-sub-menu name="about">
            <template slot="title">关于</template>
            <z-menu-item name="culture">公司文化</z-menu-item>
            <z-menu-item name="team">团队建设</z-menu-item>
            <z-sub-menu name="contact">
              <template slot="title">contact</template>
              <z-menu-item name="mobile">mobile</z-menu-item>
              <z-menu-item name="uni">uni</z-menu-item>
              <z-menu-item name="tele">tele</z-menu-item>
              <z-sub-menu name="other-contact">
                <template slot="title">other contact</template>
                <z-menu-item name="qq">qq</z-menu-item>
                <z-menu-item name="wechat">wechat</z-menu-item>
                <z-menu-item name="douyin">douyin</z-menu-item>
              </z-sub-menu>
            </z-sub-menu>
          </z-sub-menu>
          <z-menu-item name="other">其他</z-menu-item>
        `
      },
      // listeners: {
      //   'update:selected': fake
      // }
    })
    setTimeout(() => {
      // console.log(wrapper.html())
      let item = wrapper.find('[data-name="other"]')
      wrapper.vm.eventBus.$on('update:selected',fake)
      item.trigger('click')
      setTimeout(() => {
        expect(fake).to.have.been.calledWith('other')
        done()
      }, 1000)
    })
  })
})
