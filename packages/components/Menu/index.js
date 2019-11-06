import Menu from "./Menu.js";
import './style.scss';

Menu.install = Vue => {
    Vue.component(Menu.name, Menu);
};

export default Menu;
