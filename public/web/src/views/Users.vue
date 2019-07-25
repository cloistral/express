<template>
    <div>
        <north-header title="用户" />
        <div class="scroll-list-wrap">
            <cube-scroll ref="scroll"
                         :data="usersList"
                         :options="options"
                         @pulling-down="onPullingDown"
                         @pulling-up="onPullingUp">
                <div class="list-container">
                    <div class="section"
                         v-for="(item,index) in usersList"
                         :key="index">
                        <div v-text="'用户名:' + item.username"
                              class="test"></div>
                        <div v-text="'密码:' + item.password"></div>
                        <div v-text="'生日:' + item.birthdaty"></div>
                    </div>
                </div>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
import NorthHeader from '../components/NorthHeader'
export default {
    data() {
        return {
            usersList: [],
            param : {
                pageSize : 0,
                pageCount : 5
            }
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        options() {
            return {
                pullDownRefresh: true,
                pullUpLoad: true,
                scrollbar: true
            }
        },
    },
    methods: {
        init(page) {
            this.param.pageSize = page || this.param.pageSize
            this.$http
            .post('/api/getUserInfo',this.param)
            .then((res) => {
                this.param.pageSize++
                this.usersList = this.usersList.concat(res.data.list) 
            })
        },
        onPullingDown() {
            this.init()
        },
        onPullingUp() {
            this.init()
        },
    }
}
</script>

<style lang="stylus">
.scroll-list-wrap {
    width 100%;
    height : calc(100% - 44Px);
    position absolute;
    top :  44px;
}
.list-container {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section {
        width: 100%;
        margin: 10px 0;
        display: flex;
        flex-direction column;
        justify-content: space-between;
        div {
            margin : 10px 0
        }
    }
}
</style>
