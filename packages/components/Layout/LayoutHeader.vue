<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = `i-layout-header`;

    export default {
        name: "LayoutHeader",
        data() {
            return {
                prefixCls
            }
        }
    }
</script>
