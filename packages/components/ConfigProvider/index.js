export const ConfigCustomizeProps = {
    getPrefixCls: (suffixCls, customizePrefixCls) => {
        if (customizePrefixCls) return customizePrefixCls;
        return `i-${suffixCls}`;
    }
};
