import Popover from '@/components/popover/popover.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { expect } from 'chai'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.runtimeCompiler = true

describe('Popover.vue', ()=>{
    it('存在',()=>{
        expect(Popover).to.exist
    })

    it('接受 trigger , position 属性', (done)=>{
        Vue.component('z-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <z-popover position='bottom' trigger='click' ref='popover'>
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>点我</button>
      </z-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            vm.$el.querySelector('button').click()
            vm.$nextTick(()=>{
                const { contentWrapper } = vm.$refs.popover.$refs
                expect(contentWrapper.classList.contains('position-bottom')).to.eq(true)
                done()
            })
        })

    })

    
})