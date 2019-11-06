import Row from '@/components/grid/row.vue'
import Col from '@/components/grid/col.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { expect } from 'chai'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.runtimeCompiler = true

describe('Row.vue', ()=>{
    it('存在',()=>{
        expect(Row).to.exist
    })

    it('接受 gutter 属性', (done)=>{
        Vue.component('z-row', Row)
        Vue.component('z-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <z-row gutter="20">
            <z-col span="12"></z-col>
            <z-col span="12"></z-col>
        </z-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            // console.log(vm.$el.outerHTML)
            const row = vm.$el.querySelector('.z-view-row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.z-view-col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)

    })

    it('接受 align 属性',()=>{
        const wrapper = mount(Row, {
            attachToDocument: true,
            propsData: {
                align: 'center',
            }
        })
        const element = wrapper.vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('center')
        wrapper.vm.$el.remove()
        wrapper.destroy()
    })
})
