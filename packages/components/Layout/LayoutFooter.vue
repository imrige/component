<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = `i-layout-footer`;

    export default {
        name: "LayoutFooter",
        data() {
            return {
                prefixCls
            }
        }
    }
</script>
