import * as Card from './components/Card';
import * as Layout from "./components/Layout";
import * as Skeleton from "./components/Skeleton";

import './styles/index.scss';

let components = {
    ...Card,
    ...Layout,
    ...Skeleton,
};

export default {
    install: (Vue) => {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        })
    }
}
