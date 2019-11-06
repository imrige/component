import classNames from 'classnames';

import VuePropTypes from "../../types";
import {ConfigCustomizeProps} from "../ConfigProvider";
import {getOptionProps} from "../../utils/props-util";

export const BasicProps = {
    prefixCls: VuePropTypes.string,
    hasSidebar: VuePropTypes.bool
};

const Basic = {
    props: BasicProps,
    render(h) {
        const {$slots, $listeners, prefixCls} = this;
        const _props = {
            attrs: {
                class: prefixCls,
            },
            on: $listeners
        };

        return h('div', _props, $slots.default);
    }
};

const BasicLayout = {
    provide() {
        return {
            sidebarHook: {
                addSidebar: id => {
                    this.sidebars = [...this.sidebars, id];
                },
                removeSidebar: id => {
                    this.sidebars = this.sidebars.filter(_id => _id !== id);
                },
            }
        }
    },
    props: BasicProps,
    data() {
        return {
            sidebars: []
        }
    },
    render(h) {
        const {$slots, $listeners, prefixCls, hasSidebar} = this;
        const _props = {
            attrs: {
                class: classNames(prefixCls, {
                    [`${prefixCls}-has-sidebar`]: hasSidebar || this.sidebars.length > 0
                }),
            },
            on: $listeners
        };

        return h('div', _props, $slots.default);
    }
};

function generator(props, name) {
    return BasicComponent => {
        return {
            name: name,
            props: BasicComponent.props,
            inject: {
                configProvider: {default: () => ConfigCustomizeProps},
            },
            render(h) {
                const {suffixCls} = props;
                const {prefixCls: customizePrefixCls} = this.$props;
                const {$slots, $listeners} = this;
                const getPrefixCls = this.configProvider.getPrefixCls;
                const prefixCls = getPrefixCls(suffixCls, customizePrefixCls);

                const _props = {
                    props: {
                        prefixCls,
                        ...getOptionProps(this)
                    },
                    on: $listeners
                };

                return h(BasicComponent, _props, $slots.default);
            }
        }
    }
}

const Layout = generator({suffixCls: 'layout'}, 'iLayout')(BasicLayout);
const Header = generator({suffixCls: 'layout-header'}, 'iLayoutHeader')(Basic);
const Content = generator({suffixCls: 'layout-content'}, 'iLayoutContent')(Basic);
const Footer = generator({suffixCls: 'layout-footer'}, 'iLayoutFooter')(Basic);

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
