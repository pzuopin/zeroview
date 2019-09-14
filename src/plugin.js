import Toast from './components/toast'
let currentToast
export default {
    install(Vue, option){
        Vue.prototype.$toast = function(message, toastProps){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({ Vue, propsData: toastProps, message })
        }
    }
}
function createToast({ Vue,message, propsData }){
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}