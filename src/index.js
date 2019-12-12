import Button from "./components/button/index.js";
import Icon from "./components/icon/index.js";
import ButtonGroup from "./components/button-group/index.js";
import Input from "./components/input/index.js";
import Grid from "./components/grid/index.js";
import Tab from "./components/tab/index.js";
import Toast from "./components/toast/index.js";
import Collapse from "./components/collapse/index.js";
import Menu from "./components/menu/index.js";
import Popover from './components/popover/index.js'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Grid,
  Tab,
  Toast,
  Collapse,
  Menu,
  Popover
];

const install = Vue => {
  components.forEach(component => {
    Vue.use(component);
  });
};

export { Button, Icon, ButtonGroup, Input, Grid, Tab, Toast, Menu, Collapse };

export default install;
