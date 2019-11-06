import VuePropTypes from "../../types";
import {ConfigCustomizeProps} from "../ConfigProvider";
import {getComponentFromProp} from "../../utils/props-util";

export default {
    name: 'iCardMeta',
    props: {
        prefixCls: VuePropTypes.string,
        title: VuePropTypes.string,
        description: VuePropTypes.string
    },
    inject: {
        configProvider: {default: () => ConfigCustomizeProps},
    },
    render(h) {
        const {prefixCls: customizePrefixCls} = this.$props;
        const {$slots, $listeners} = this;
        const getPrefixCls = this.configProvider.getPrefixCls;
        const prefixCls = getPrefixCls('card-meta', customizePrefixCls);

        const avatar = getComponentFromProp(this, 'avatar');
        const avatarDOM = avatar ? h => {
            return h('div', {class: `${prefixCls}-avatar`}, avatar);
        } : null;
        const title = getComponentFromProp(this, 'title');
        const titleDOM = title ? h => {
            return h('div', {class: `${prefixCls}-title`}, title);
        } : null;
        const description = getComponentFromProp(this, 'description');
        const descriptionDOM = description ? h => {
            return h('div', {class: `${prefixCls}-description`}, description);
        } : null;
        const metaDetail = title || description;
        const metaDetailDOM = metaDetail ? h => {
            return h('div', {class: `${prefixCls}-detail`}, [
                titleDOM(h),
                descriptionDOM(h)
            ])
        } : null;

        const _props = {
            class: {
                [`${prefixCls}`]: true
            },
            on: $listeners
        };

        return h('div', _props, [
            avatarDOM && avatarDOM(h),
            metaDetailDOM && metaDetailDOM(h)
        ]);
    }
}
