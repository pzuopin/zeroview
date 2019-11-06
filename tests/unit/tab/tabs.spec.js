import chai, { expect } from 'chai'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Tabs from '@/components/tab/tabs.vue'
import TabsHead from '@/components/tab/tabs-head.vue'
import TabsBody from '@/components/tab/tabs-body.vue'
import TabsItem from '@/components/tab/tabs-item.vue'
import TabsPane from '@/components/tab/tabs-pane.vue'
import { isIterable } from 'core-js'
chai.use(sinonChai)

Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)

describe('Tabs.vue', () => {
    it('存在', () => {
        expect(Tabs).to.be.exist
    })

    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <z-tabs selected="finance">
                <z-tabs-head>
                    <z-tabs-item name="women">美女</z-tabs-item>
                    <z-tabs-item name="finance">财经</z-tabs-item>
                    <z-tabs-item name="sports">体育</z-tabs-item>
                </z-tabs-head>
                <z-tabs-body>
                    <z-tabs-pane name="women">美女相关资讯</z-tabs-pane>
                    <z-tabs-pane name="finance">财经相关资讯</z-tabs-pane>
                    <z-tabs-pane name="sports">体育相关资讯</z-tabs-pane>
                </z-tabs-body>
            </z-tabs>
        `
        const vm = new Vue({
            el: div,
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector('.z-view-tabs-item[data-name="finance"]')
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

    xit('接受 direction 属性',()=>{
        console.log('还未实现')
        // expect(false).to.eq(true)
    })
})
