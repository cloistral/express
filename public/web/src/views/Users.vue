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
                         @click="userClick(item)"
                         v-for="(item,index) in usersList"
                         :key="index">
                        <div v-text="'用户名:' + item.username"
                             class="test"></div>
                        <div v-text="'密码:' + item.password"></div>
                        <div v-text="'生日:' + item.birthday ? item.birthday : '2019-09-08'"></div>
                        <div v-if="item.address"
                             v-text="'地址:' + item.address ? item.address: '吉林省蛟河市庆岭镇'"></div>
                    </div>
                </div>
            </cube-scroll>
            <north-child-view />
        </div>
    </div>
</template>

<script>
import NorthHeader from '../components/NorthHeader'
export default {
    data() {
        return {
            usersList: [],
            param: {
                pageSize: 0,
                pageCount: 10000
            }
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        options() {
            return {
                pullDownRefresh: {
                    threshold: 60,
                    stop: 40,
                    txt: '更新成功'
                },
                pullUpLoad: {
                    threshold: 60,
                    stop: 40,
                    txt: '加载中'
                },
                scrollbar: true
            }
        },
    },
    methods: {

        downloadFile() {
            this.$http.get('/api/readFile', {
                responseType: 'blob'
            }).then(res => {
                console.log(111, '下载数据');
                let url = window.URL.createObjectURL(new Blob([res]))
                let link = document.createElement('a')
                link.style.display = 'none'
                link.href = url
                link.setAttribute('download', 'excel.zip')
                document.body.appendChild(link)
                link.click()
            })
        },
        init(page) {
            this.param.pageSize = page || this.param.pageSize
            this.$http
                .post('/api/getUserInfo', this.param)
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
        userClick(item) {
            this.$router.forward({ path: '/user/editUser', query: { options: JSON.stringify(item) } })
        },
        addChildren(item) {

            this.$router.forward({ path: '/user/addUserChild', query: { id: item.id } })
        }
    }
}
</script>

<style lang="stylus">
.scroll-list-wrap
    width 100%
    height calc(100% - 44Px)
    position absolute
    top 44px
.list-container
    width 95%
    margin auto
    display flex
    flex-direction column
    align-items center
    .section
        width 100%
        margin 10px 0
        display flex
        flex-direction column
        justify-content space-between
        div
            margin 10px 0
</style>
