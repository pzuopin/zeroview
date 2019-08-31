export default {
    install(Vue, option){
        Vue.prototype.$toast = function(){
            console.log(' I am toast ~~')
        }
    }
}