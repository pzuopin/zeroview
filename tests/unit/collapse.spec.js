import Collapse from '@/components/collapse/collapse.vue'
import CollapseItem from '@/components/collapse/collapse-item.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { expect } from 'chai'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.runtimeCompiler = true

describe('Collapse.vue', ()=>{
    it('存在',()=>{
        expect(Collapse).to.exist
    })

    it('接受 single 属性', (done) => {
        Vue.component('z-collapse', Collapse)
        Vue.component('z-collapse-item', CollapseItem)

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <z-collapse single :selected="['2','3']">
            <z-collapse-item title='标题1' name='1'>内容1</z-collapse-item>
            <z-collapse-item title='标题2' name='2'>内容2</z-collapse-item>
            <z-collapse-item title='标题3' name='3'>内容3</z-collapse-item>
        </z-collapse>
        `
        const vm = new Vue({
            el: div
        })

        vm.$nextTick(()=>{
            // console.log(vm.$el.innerHTML)
            expect(vm.$el.querySelector('.z-view-collapse-item-content[data-name="2"]')).to.be.exist
            vm.$el.querySelectorAll('.z-view-collapse-item-title')[2].click()
            vm.$nextTick(()=>{
                // console.log(vm.$el.innerHTML)
                expect(vm.$el.querySelector('.z-view-collapse-item-content[data-name="2"]')).to.be.not.exist
                expect(vm.$el.querySelector('.z-view-collapse-item-content[data-name="3"]')).to.be.exist
                done()
            })
        })
    })

    it('接受 selected 属性', (done) => {
        Vue.component('z-collapse', Collapse)
        Vue.component('z-collapse-item', CollapseItem)

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <z-collapse :selected="['2','3']">
            <z-collapse-item title='标题1' name='1'>内容1</z-collapse-item>
            <z-collapse-item title='标题2' name='2'>内容2</z-collapse-item>
            <z-collapse-item title='标题3' name='3'>内容3</z-collapse-item>
        </z-collapse>
        `
        const vm = new Vue({
            el: div
        })

        vm.$nextTick(()=>{
            // console.log(vm.$el.innerHTML)
            expect(vm.$el.querySelector('.z-view-collapse-item-content[data-name="2"]')).to.be.exist
            expect(vm.$el.querySelector('.z-view-collapse-item-content[data-name="3"]')).to.be.exist
            done()
        })
    })




})
