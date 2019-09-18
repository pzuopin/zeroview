import chai, { expect } from 'chai'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Toast from '@/components/toast.vue'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.runtimeCompiler = true

describe('Toast.vue', () => {
    it('存在', () => {
        expect(Toast).to.be.exist
    })
    describe('props', function () {
        it('接受 autoClose 是 false', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: false,
                    // autoCloseDelay: 1
                }
            }).$mount(div)

            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(true)
                done()
            },1500)
        })

        it('接受 autoClose 是 数字', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                    // autoCloseDelay: 1
                }
            }).$mount(div)

            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            },1500)
        })

        it('接受 closeButton', () => {
            const callback = sinon.fake()
            // let div = document.createElement('div')
            // document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '知道了',
                        callback
                    }
                }
            }).$mount()
            // console.log(vm.$el.outerHTML)
            let span = vm.$el.querySelector('.close')
            expect(span.textContent.trim()).to.eq('知道了')
            span.click()
            expect(callback).to.have.been.called
            
        })

        it('接受 enableHTML ',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            const strong = vm.$el.querySelector('#test')
            expect(strong).to.be.exist
        })

        it('接受 position = bottom,top,middle', ()=>{
            ['bottom','top','middle'].forEach(position => {
                const Constructor = Vue.extend(Toast)
                const vm = new Constructor({
                    propsData: {
                        position
                    }
                }).$mount()
                expect(vm.$el.classList.contains(`position-${position}`)).to.eq(true)
            })
        })
    })

    
})
