<template>

</template>

<script>
    import VuePropTypes from "../../types";

    const widthUnit = VuePropTypes.oneOfType([VuePropTypes.number, VuePropTypes.string]);
    const skeletonParagraphProps = {
        rows: VuePropTypes.number.def(3),
        width: VuePropTypes.oneOfType([widthUnit, VuePropTypes.arrayOf(widthUnit)])
    };

    export const SkeletonParagraphProps = VuePropTypes.shape(skeletonParagraphProps);

    export default {
        name: "SkeletonParagraph",
        props: skeletonParagraphProps,
        data() {
            return {}
        }
    }
</script>
