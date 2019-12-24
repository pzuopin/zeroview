// 这里有一个问题，因为只给  document 添加了一个监听器，如果组件在 destroyed 之后把监听移除，下次再 mounted 就没有监听器了
// 所以最好不要移除这个监听，反正只有一个

let onClickDocument = (e) => {
  actions.forEach((item) => {
    let callback = item.callback
    if (item.el === e.target || item.el.contains(e.target)) {
    } else {
      callback()
    }
  })

}
document.addEventListener('click', onClickDocument)
let actions = []
export default {
  bind: function (el, binding, vnode) {
    actions.push({ el: el, callback: binding.value })
  }
}

let removeClickOutSideListener = ()=>{
  document.removeEventListener('click', onClickDocument)
}

export { removeClickOutSideListener }
