<template>
    <div class="i-card-meta">
        <template v-if="showAvatar">
            <div class="i-card-meta-avatar">
                <slot name="avatar"/>
            </div>
        </template>
        <div class="i-card-meta-detail">
            <template v-if="title || showTitle">
                <div class="i-card-meta-title">
                    <template v-if="title">{{title}}</template>
                    <template v-else-if="showTitle">
                        <slot name="title"/>
                    </template>
                </div>
            </template>
            <template v-if="description || showDescription">
                <div class="i-card-meta-description">
                    <template v-if="description">{{description}}</template>
                    <template v-else-if="showDescription">
                        <slot name="description"/>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import VuePropTypes from "../../types";

    export default {
        name: "CardMeta",
        props: {
            title: VuePropTypes.string,
            description: VuePropTypes.string
        },
        data() {
            return {
                showTitle: false,
                showAvatar: false,
                showDescription: false,
            }
        },
        mounted() {
            let {$slots} = this;

            this.showTitle = $slots.title !== undefined;
            this.showAvatar = $slots.avatar !== undefined;
            this.showDescription = $slots.description !== undefined;
        }
    }
</script>
