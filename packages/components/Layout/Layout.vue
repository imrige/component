<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = `i-layout`;

    export default {
        name: "Layout",
        data() {
            return {
                prefixCls
            }
        }
    }
</script>
