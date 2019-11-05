<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = `i-layout-content`;

    export default {
        name: "LayoutContent",
        data() {
            return {
                prefixCls
            }
        }
    }
</script>
