import Layout from "./Layout";
import LayoutHeader from "./LayoutHeader";
import LayoutSidebar from "./LayoutSidebar";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";

Layout.Header = LayoutHeader;
Layout.Sidebar = LayoutSidebar;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;

import './style.scss';

export {
    Layout,
    LayoutSidebar,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
}
