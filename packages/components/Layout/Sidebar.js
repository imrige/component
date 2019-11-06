import classNames from 'classnames';

import VuePropTypes from "../../types";
import {initDefaultProps} from "../../utils/props-util";
import {ConfigCustomizeProps} from "../ConfigProvider";

const generateId = (() => {
    let i = 0;
    return (prefix = '') => {
        i += 1;
        return `${prefix}${i}`;
    };
})();

const BasicProps = {
    prefixCls: VuePropTypes.string,
    collapsible: VuePropTypes.bool.def(false),
    collapsed: VuePropTypes.bool.def(false),
    defaultCollapsed: VuePropTypes.bool.def(false),
    reverseArrow: VuePropTypes.bool.def(false),
    trigger: VuePropTypes.any,
    width: VuePropTypes.oneOfType([VuePropTypes.number, VuePropTypes.string]).def(256),
    collapsedWidth: VuePropTypes.oneOfType([VuePropTypes.number, VuePropTypes.string]).def(80),
    breakpoint: VuePropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    theme: VuePropTypes.oneOf(['light', 'dark']).def('dark'),
};

export default {
    name: 'iLayoutSidebar',
    inject: {
        sidebarHook: {default: () => ({})},
        configProvider: {default: () => ConfigCustomizeProps},
    },
    props: BasicProps,
    data() {
        this.uniqueId = generateId('i-sidebar-');

        let isCollapsed;
        if ('collapsed' in this.$props) isCollapsed = this.$props.collapsed;
        else isCollapsed = this.$props.defaultCollapsed;

        return {
            isCollapsed
        }
    },
    mounted() {
        if (this.sidebarHook.addSidebar) this.sidebarHook.addSidebar(this.uniqueId);
    },
    beforeDestroy() {
        if (this.sidebarHook.removeSidebar) this.sidebarHook.removeSidebar(this.uniqueId);
    },
    render(h) {
        const {
            prefixCls: customizePrefixCls,
            theme,
            isCollapsed,
            collapsible,
            reverseArrow,
            width,
            collapsedWidth,
            $slots,
            $listeners
        } = this;
        const _width = `${isCollapsed ? collapsedWidth : width}px`;
        const getPrefixCls = this.configProvider.getPrefixCls;
        const prefixCls = getPrefixCls('layout-sidebar', customizePrefixCls);
        const _props = {
            class: {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${theme}`]: true,
            },
            style: {
                flex: `0 0 ${_width}`,
                maxWidth: _width,
                minWidth: _width,
                width: _width,
            },
            on: $listeners
        };

        return h('div', _props, [
            h('div', {attrs: {class: `${prefixCls}-children`}}, $slots.default)
        ])
    }
}
