<template>
    <div v-if="loading">
        <div :class="classes">
            <template v-if="showAvatar">
                <div :class="`${prefix}-header`">
                    <span :class="`${prefix}-avatar`"></span>
                </div>
            </template>

            <div :class="`${prefix}-content`">
                <template v-if="showTitle">
                    <div :class="`${prefix}-title`"></div>
                </template>

                <template v-if="showParagraph">
                    <ul :class="`${prefix}-paragraph`">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script>
    import VuePropTypes from "../../types";

    const prefix = `i-skeleton`;

    export default {
        name: "Skeleton",
        props: {
            showAvatar: VuePropTypes.bool.def(false),
            showParagraph: VuePropTypes.bool.def(true),
            showTitle: VuePropTypes.bool.def(true),
            loading: VuePropTypes.bool.def(false),
            active: VuePropTypes.bool.def(false)
        },
        computed: {
            classes() {
                return [
                    `${prefix}`,
                    {
                        [`${prefix}-active`]: this.active
                    }
                ]
            }
        },
        data() {
            return {
                prefix
            }
        }
    }
</script>
