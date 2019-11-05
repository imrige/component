<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = `i-layout-sidebar`;

    export default {
        name: "LayoutSidebar",
        data() {
            return {
                prefixCls
            }
        }
    }
</script>
