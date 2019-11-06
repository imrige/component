import VuePropTypes from "../../types";

export const BasicProps = {
    theme: VuePropTypes.oneOf(['light', 'dark']).def('light'),
    mode: VuePropTypes.oneOf(['vertical', 'vertical-left', 'vertical-right', 'horizontal', 'inline']).def('vertical'),
    selectable: VuePropTypes.bool,
    selectedKeys: VuePropTypes.arrayOf(VuePropTypes.oneOfType([VuePropTypes.string, VuePropTypes.number])),
    defaultSelectedKeys: VuePropTypes.array,
    openKeys: VuePropTypes.array,
    defaultOpenKeys: VuePropTypes.array,
    openAnimation: VuePropTypes.oneOfType([VuePropTypes.string, VuePropTypes.object]),
    openTransitionName: VuePropTypes.string,
    prefixCls: VuePropTypes.string,
    multiple: VuePropTypes.bool,
    inlineIndent: VuePropTypes.number.def(24),
    inlineCollapsed: VuePropTypes.bool,
    isRootMenu: VuePropTypes.bool.def(true),
    focusable: VuePropTypes.bool.def(false),
};

export default {
    name: 'iMenu'
}
