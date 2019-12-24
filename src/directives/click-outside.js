export default {
  bind: function (el, binding, vnode) {
    document.addEventListener('click', (e)=>{
      let { target } = e
      let callback = binding.value
      if(el === target || el.contains(target)){
        console.log('click inside')
      }else{
        console.log('click outside')
        callback()
      }
    })
  }
}
