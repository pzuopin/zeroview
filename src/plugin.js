import Toast from './components/toast'
export default {
    install(Vue, option){
        Vue.prototype.$toast = function(message){
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}