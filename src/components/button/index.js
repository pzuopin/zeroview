import zViewButton from './button.vue'

zViewButton.install = function(Vue){
    Vue.component(zViewButton.name, zViewButton)
}

export default zViewButton