<template>
    <div id="app">
        <i-layout>
            <i-layout-sidebar></i-layout-sidebar>
            <i-layout style="min-height: 100vh;">
                <i-layout-header style="background: #ffffff;">
                    <div style="width: 100px; height: 32px; background: rgba(255, 255, 255, .3); margin: 16px 0"></div>
                </i-layout-header>
                <i-layout-content style="padding: 48px;">
                    <template v-for="i in 8">
                        <div :key="i" style="display: inline-block; width: 25%; padding: 8px">
                            <i-card title="Title">
                                <a slot="extra">Extra</a>

                                <img slot="cover"
                                     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="">

                                <i-card-meta title="meta-title" description="meta-description">
                                    <template slot="avatar">
                                        Meta Avatar
                                    </template>
                                </i-card-meta>

                                <template slot="actions">
                                    <a>编辑</a>
                                    <a>删除</a>
                                </template>
                            </i-card>
                        </div>
                    </template>
                </i-layout-content>
                <i-layout-footer>
                    <p style="text-align: center">Copyright 2019</p>
                </i-layout-footer>
            </i-layout>
        </i-layout>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
