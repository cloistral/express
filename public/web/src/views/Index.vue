<template>
    <div class="page">
        <router-view />
        <mine-tab />
    </div>
</template>

<script>
import MineTab from '@/components/MineTab'
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        'mine-tab': MineTab
    }
}
</script>

<style lang="stylus">
.page
    padding-top 0
    width 100vw
    height calc(100vh - 44px)
</style>
