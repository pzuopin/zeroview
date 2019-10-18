import Vue from 'vue'
import App from './App'
import Button from './components/button/index.js'
// import Icon from './components/icon'
import ButtonGroup from './components/button-group/index.js'

import Input from './components/input'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Layout from './components/grid/layout'
import Content from './components/grid/content'
import Footer from './components/grid/footer'
import Header from './components/grid/header'
import Sider from './components/grid/sider'
import Toast from './components/toast'
import Tabs from './components/tab/tabs'
import TabsPane from './components/tab/tabs-pane'
import TabsBody from './components/tab/tabs-body'
import TabsItem from './components/tab/tabs-item'
import TabsHead from './components/tab/tabs-head'
import Popover from './components/popover'

import router from './router'
import store from './store'
import plugin from './plugin'

const components = [
    Button,
    // Icon,
    ButtonGroup,
    // Input,
    // Row,
    // Col,
    // Layout,
    // Content,
    // Footer,
    // Header,Sider,
    // Toast,
    // Tabs,
    // TabsPane,
    // TabsBody,
    // TabsItem,
    // TabsHead,
    // Popover
]

const install = function(Vue, opts = {}){
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

install(Vue)

// if(typeof window !== 'undefined' && window.Vue){
//     install(window.Vue)
// }

export default {
    install,
    Button,
    // Icon,
    ButtonGroup,
    // Input,
    // Row,
    // Col,
    // Layout,
    // Content,
    // Footer,
    // Header,Sider,
    // Toast,
    // Tabs,
    // TabsPane,
    // TabsBody,
    // TabsItem,
    // TabsHead,
    // Popover
}