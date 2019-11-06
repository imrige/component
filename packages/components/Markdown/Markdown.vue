<template>
    <div :class="prefixCls" v-html="Marked(source)"></div>
</template>

<script>
    import Marked from 'marked';
    import VuePropTypes from "../../types";

    const prefixCls = `i-markdown`;
    const renderer = new Marked.Renderer();
    renderer.heading = function (text, level) {
        return (
            '<h' + level + ' id="' + text.replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n'
        );
    };

    Marked.setOptions({
        renderer,
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: true,
        smartLists: true,
        smartypants: true,
    });

    export default {
        name: "Markdown",
        props: {
            source: VuePropTypes.string
        },
        data() {
            return {
                prefixCls,
                Marked
            }
        }
    }
</script>
