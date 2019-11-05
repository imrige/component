<template>
    <div :class="classes">
        <template v-if="title || showTitle || showExtra">
            <div class="i-card-head" :style="headStyle">
                <div class="i-card-head-wrapper">
                    <div class="i-card-head-title">
                        <template v-if="title">{{title}}</template>
                        <template v-else-if="showTitle">
                            <slot name="title"/>
                        </template>
                    </div>
                    <template v-if="showExtra">
                        <div class="i-card-extra">
                            <slot name="extra"/>
                        </div>
                    </template>
                </div>
            </div>
        </template>

        <div class="i-card-body" :style="bodyStyle">
            <slot/>
        </div>

        <template v-if="$slots.actions">
            <ul class="i-card-actions">
                <slot name="actions"/>
            </ul>
        </template>
    </div>
</template>

<script>
    import VuePropTypes from "../../types";

    const prefix = `i-card`;

    export default {
        name: "Card",
        props: {
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
        data() {
            return {
                showTitle: false,
                showExtra: false,
            }
        },
        computed: {
            classes() {
                return [
                    `${prefix}`,
                    {
                        [`${prefix}-bordered`]: this.bordered,
                        [`${prefix}-hover`]: this.hover
                    }
                ]
            },
            actionStyles() {
                let length = this.$slots.actions.length;

                return {
                    width: `${(1 / length * 100).toFixed(2)}%`
                }
            }
        },
        mounted() {
            let {$slots} = this;

            this.showTitle = $slots.title !== undefined;
            this.showExtra = $slots.extra !== undefined;
        }
    }
</script>
