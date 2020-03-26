<template>
    <div class="bg">
        <div class="cell">
            <span>用户名</span>
            <cube-input v-model="param.username"
                        placeholder="请输入用户名"></cube-input>
        </div>
        <div class="cell">
            <span>密码</span>
            <cube-input class="cube-input"
                        type="password"
                        v-model="param.password"
                        placeholder="请输入密码"></cube-input>
        </div>
        <div class="cell"
             @click="selectStatus">
            <span>状态</span>
            <cube-input class="cube-input"
                        readonly
                        type="text"
                        v-model="param.statusText"
                        placeholder="请选择状态"></cube-input>
        </div>
        <cube-button class="button"
                     @click="submit">确认</cube-button>
    </div>
</template>

<script>

import Scroll from '../components/scroll/index'

export default {
    data() {
        return {
            param: {
                username: '',
                password: '123456',
                status: '',
                statusText: ''
            },
            statusPicker: null,
        }
    },
    components: {
        'north-scroll': Scroll
    },
    mounted() { },
    methods: {
        selectStatus() {
            if (!this.statusPicker) {
                this.statusPicker = this.$createPicker({
                    title: '选择状态',
                    data: [
                        [
                            { text: '在职', value: '1' },
                            { text: '离职', value: '2' },
                            { text: '无业', value: '3' }
                        ]
                    ],
                    onSelect: (selectedVal, selectedIndex, selectedText) => {
                        this.param.status = selectedVal[0]
                        this.param.statusText = selectedText[0]
                    },
                })
            }
            this.statusPicker.show()
        },
        submit() {
            this.$http.post('/api/login', this.param).then((res) => {
                if (res.code == 200) {
                    localStorage.token = res.data.token
                    this.$router.forward({ path: '/user' })
                }
            })
        }
    }
}
</script>

<style lang="stylus" socped>
.bg
    background url('../assets/fu/fu_6.jpg')
    background-size cover
    background-position center center
    display flex
    flex-direction column
    align-items center
    justify-content center
.cell
    width 80%
    height 40px
    margin 20px auto
    font-size 15px
    display flex
    align-items center
    justify-content space-between
    font-weight bold
    span
        width 20%
    .cube-input
        flex 1
        margin-left 20px
.button
    width 80%
    margin 20px auto
    background-color $color-black
    border-radius 10px

</style>
