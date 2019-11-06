import Card from './components/Card';
import Layout from "./components/Layout";
import Menu from './components/Menu';

import './styles/index.scss';

let components = [
    Card,
    Layout,
    Menu
];

export default {
    install: (Vue) => {
        components.map(component => {
            Vue.use(component);
        });
    }
}
