import Layout from "./Layout.js";
import Sidebar from './Sidebar.js';

Layout.Sidebar = Sidebar;

import './style.scss';

Layout.install = (Vue) => {
    Vue.component(Layout.name, Layout);
    Vue.component(Layout.Header.name, Layout.Header);
    Vue.component(Layout.Content.name, Layout.Content);
    Vue.component(Layout.Footer.name, Layout.Footer);
    Vue.component(Layout.Sidebar.name, Layout.Sidebar);
};

export default Layout;
