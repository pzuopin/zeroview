import Row from '@/components/grid/row.vue'
import Col from '@/components/grid/col.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { expect } from 'chai'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.runtimeCompiler = true

describe('Col.vue', ()=>{
    it('存在',()=>{
        expect(Row).to.exist
    })
    it('接受 span 属性',()=>{
        const wrapper = mount(Col, {
            attachToDocument: true,
            propsData: {
                span: 2,
            }
        })
        const element = wrapper.vm.$el
        // setTimeout(()=>{
        //     console.log(element)

        // },0)
        expect(element.classList.contains('col-2')).to.be.true
        wrapper.vm.$el.remove()
        wrapper.destroy()
    })
    it('接受 offset 属性',()=>{
        const wrapper = mount(Col, {
            attachToDocument: true,
            propsData: {
                offset: 2,
            }
        })
        const element = wrapper.vm.$el
        // setTimeout(()=>{  
        //     console.log(element)

        // },0)
        expect(element.classList.contains('offset-2')).to.be.true
        wrapper.vm.$el.remove()
        wrapper.destroy()
    })
    it('接受 ipad, narrowPc, pc, widePc 属性',()=>{
        const wrapper = mount(Col, {
            attachToDocument: true,
            propsData: {
                ipad: {
                    offset: 2,
                    span: 1
                },
                narrowPc: {
                    offset: 2,
                    span: 1
                },
                pc: {
                    offset: 2,
                    span: 1
                },
                widePc: {
                    offset: 2,
                    span: 1
                },
            }
        })
        const element = wrapper.vm.$el
        // setTimeout(()=>{
        //     console.log(element)

        // },0)
        expect(element.classList.contains('offset-ipad-2')).to.be.true
        expect(element.classList.contains('col-ipad-1')).to.be.true

        expect(element.classList.contains('offset-narrow-pc-2')).to.be.true
        expect(element.classList.contains('col-narrow-pc-1')).to.be.true

        expect(element.classList.contains('offset-pc-2')).to.be.true
        expect(element.classList.contains('col-pc-1')).to.be.true

        expect(element.classList.contains('offset-wide-pc-2')).to.be.true
        expect(element.classList.contains('col-wide-pc-1')).to.be.true
        wrapper.vm.$el.remove()
        wrapper.destroy()
    })
})