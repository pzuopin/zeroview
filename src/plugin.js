export default {
    install(Vue, option){
        Vue.prototype.$toast = function(message){
            // test if it work
            console.log(' I am toast ~~')
            // 用 alert 假装 toast
            // alert(message)
            // 用 div (而不是 Vue 组件) 假装 toast
            let div = document.createElement('div')
            div.textContent = message
            document.body.appendChild(div)
        }
    }
}