<template>
    <div class="mine-tab">
        <div v-for="(tab,index) in tabList"
             :key="index"
             @click="tabItemClick(index,tab)"
             :class="['tab-item',activeIndex == index ? 'active' : '']">
            <span v-text="tab.tabTitle"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            tabList: [
                {
                    tabTitle: '首页',
                    tabId: 1,
                    tabIcon: '',
                    path: '/index'
                },
                {
                    tabTitle: '我的',
                    tabId: 1,
                    tabIcon: '',
                    path: '/mine'
                },
            ]
        }
    },
    methods: {
        tabItemClick(index, tabItem) {
            this.activeIndex = index
            this.$router.forward({ path: tabItem.path })
        }

    }
}
</script>

<style lang="stylus" scoped>
.mine-tab
    position fixed
    bottom 0
    left 0
    width 100%
    height 44px
    box-sizing border-box
    border-top 1px solid #f5f5f5
    z-index 1000
    background-color #ffffff
    display flex
    align-items center
    justify-content space-around
    font-size 15px
    font-weight bold
    .tab-item
        color #888
    .tab-item.active
        color #EA2349
</style>
