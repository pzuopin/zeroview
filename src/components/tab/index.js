import zViewTabsBody from './tabs-body.vue'
import zViewTabsHead from './tabs-head.vue'
import zViewTabsItem from './tabs-item.vue'
import zViewTabsPane from './tabs-pane.vue'
import zViewTabs from './tabs.vue'

const tabsComponents = [
    zViewTabsBody,
    zViewTabsHead,
    zViewTabsItem,
    zViewTabsPane,
    zViewTabs
]

const install = Vue => {
    tabsComponents.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default install
