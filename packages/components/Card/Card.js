import VuePropTypes from "../../types";
import {ConfigCustomizeProps} from "../ConfigProvider";
import {filterEmpty, getComponentFromProp, getSlotOptions} from "../../utils/props-util";

export default {
    name: 'iCard',
    inject: {
        configProvider: {default: () => ConfigCustomizeProps}
    },
    props: {
        prefixCls: VuePropTypes.string,
        title: VuePropTypes.any,
        extra: VuePropTypes.any,
        actions: VuePropTypes.any,
        size: VuePropTypes.oneOf(['large', 'default', 'small']),
        type: VuePropTypes.oneOf(['inner']),
        loading: VuePropTypes.bool.def(false),
        hover: VuePropTypes.bool.def(false),
        bordered: VuePropTypes.bool.def(true),
        headStyle: VuePropTypes.object,
        bodyStyle: VuePropTypes.object,
    },
    methods: {
        getAction(actions, h) {
            const length = actions.length;
            if (!actions || !length) return null;

            return actions.map((action, index) => {
                return h('li', {style: {width: `${100 / length}%`, key: index}}, [
                    h('span', [action])
                ]);
            });
        },
        isContainGrid(obj = []) {
            let containGrid;
            obj.forEach(element => {
                if (element && getSlotOptions(element)._CARD_GRID) {
                    containGrid = true;
                }
            });
            return containGrid;
        },
    },
    render(h) {
        const {
            prefixCls: customizePrefixCls,
            headStyle = {},
            bodyStyle = {},
            loading,
            bordered = true,
            size = 'default',
            type,
            hover,
        } = this.$props;

        const prefixCls = this.configProvider.getPrefixCls('card', customizePrefixCls);
        const {$slots, $scopedSlots, $listeners} = this;

        let headDOM;
        let bodyDOM;
        let actions = filterEmpty($slots.actions);

        const cover = getComponentFromProp(this, 'cover');
        const coverDOM = cover ? h => {
            return h('div', {class: `${prefixCls}-cover`}, cover);
        } : null;
        const title = getComponentFromProp(this, 'title');
        const titleDOM = title ? h => {
            return h('div', {class: `${prefixCls}-head-title`}, title)
        } : null;
        const extra = getComponentFromProp(this, 'extra');
        const extraDOM = extra ? h => {
            return h('div', {class: `${prefixCls}-head-extra`}, extra)
        } : null;
        const actionsDOM = actions && actions.length ? h => {
            return h('ul', {class: `${prefixCls}-actions`}, this.getAction(actions, h));
        } : null;

        if (titleDOM || extraDOM) {
            headDOM = h => {
                return h('div', {class: `${prefixCls}-head`, style: headStyle}, [
                    h('div', {class: `${prefixCls}-head-wrapper`}, [
                        titleDOM && titleDOM(h),
                        extraDOM && extraDOM(h),
                    ])
                ])
            }
        }

        bodyDOM = h => {
            return h('div', {class: `${prefixCls}-body`, style: bodyStyle}, $slots.default);
        };

        const _props = {
            class: {
                [`${prefixCls}`]: true,
                [`${prefixCls}-loading`]: loading,
                [`${prefixCls}-bordered`]: bordered,
                [`${prefixCls}-hover`]: !!hover,
                [`${prefixCls}-contain-grid`]: this.isContainGrid($slots.default),
                [`${prefixCls}-${size}`]: size !== 'default',
                [`${prefixCls}-type-${type}`]: !!type,
            },
            on: $listeners
        };

        return h('div', _props, [
            headDOM && headDOM(h),
            coverDOM && coverDOM(h),
            bodyDOM && bodyDOM(h),
            actionsDOM && actionsDOM(h)
        ]);
    }
}
