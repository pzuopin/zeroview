import Toast from './toast.vue'
let currentToast
export default {
    install(Vue, option){
        Vue.prototype.$toast = function(message, toastProps){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({ 
                Vue, 
                propsData: toastProps, 
                message,
                onClose: () => {
                    currentToast = null
                }
             })
        }
    }
}
function createToast({ Vue,message, propsData, onClose }){
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}