<template>
    <div class="bg">
        <div class="cell">
            <span>用户名</span>
            <cube-input v-model="param.username" placeholder="请输入用户名"></cube-input>
        </div> 
        <div class="cell">
            <span>密码</span>
            <cube-input class="cube-input" v-model="param.password" placeholder="请输入密码"></cube-input>
        </div> 
        <cube-button class="button" @click="submit">确认</cube-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            param : {
                username : '',
                password : '',
                age : '',
            }
        }
    },
    methods : {
        submit() {
            if(!this.param.username && !this.param.password) {
                const toast = this.$createToast({
                    time: 1000,
                    type : 'txt',
                    txt: '请输入用户名和密码'
                })
                toast.show()
                return;
            }
            this.$http.get('/api/login',{params:this.param})
                .then(res => {
                    localStorage.token = res.token
                    this.$router.push({path:'/user'})
                })
        },
    }
}
</script>


<style lang="stylus" socped>
.bg {
    background: url('../assets/star_sky.jpg');
    background-size cover;
    background-position center center;
    display flex
    flex-direction column;
    align-items center;
    justify-content center
}
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
        width 20%;
        color #fff 
    .cube-input 
        flex 1
        margin-left 20px
.button 
    width 80%
    margin 20px auto
    background-color $color-black
    border-radius 10px
    
</style>
