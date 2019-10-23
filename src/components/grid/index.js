import Col from './col.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Layout from './layout.vue'
import Row from './row.vue'
import Sider from './sider.vue'

const gridComponents = [
    Col,
    Content,
    Footer,
    Header,
    Layout,
    Row,
    Sider
]

const install = Vue => {
    gridComponents.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default install