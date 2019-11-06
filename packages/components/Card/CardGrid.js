import VuePropTypes from "../../types";
import {ConfigCustomizeProps} from "../ConfigProvider";

export default {
    name: 'iCardGrid',
    _CARD_GRID: true,
    props: {
        prefixCls: VuePropTypes.string
    },
    inject: {
        configProvider: {default: () => ConfigCustomizeProps}
    },
    render(h) {
        const {$slots, $listeners} = this;
        const {prefixCls: customizePrefixCls} = this.$props;
        const getPrefixCls = this.configProvider.getPrefixCls;
        const prefixCls = getPrefixCls('card-grid', customizePrefixCls);
        const _props = {
            class: {
                [`${prefixCls}`]: true
            },
            on: $listeners
        };

        return h('div', _props, $slots.default);
    }
}
