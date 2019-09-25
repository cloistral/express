<template>
    <div>
        <north-header title="添加子元素"></north-header>
        <div class="cell">
            <span>姓名</span>
            <cube-input class="cube-input"
                        v-model="param.name"
                        placeholder="请输入姓名"></cube-input>
        </div>
        <div class="cell">
            <span>年龄</span>
            <cube-input class="cube-input"
                        v-model="param.age"
                        placeholder="请输入年龄"></cube-input>
        </div>
        <cube-button class="button"
                     @click="submitHandler">确认</cube-button>

    </div>
</template>

<script>
export default {
    name: 'Test',
    props: ['options'],
    data() {
        return {
            param: {
                name: '',
                age: "",  
            },
        }
    },
    methods: {

        submitHandler() {
            this.param.id = this.$route.query.id
            this.$http.post('/api/addUserChild', this.param)
                .then((res) => {
                    this.$root.initToast({
                        txt: '编辑成功',
                        timeout: () => {
                            // this.$router.prev()
                        }
                    })
                })
        },
    },
    destroy() { }
}
</script>

<style lang="stylus" scoped>
.user-info
    width 95%
    height 50px
    margin auto
    display flex
    align-items center
    justify-content space-between
    div
        flex 1
</style>
