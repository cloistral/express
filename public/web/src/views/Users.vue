<template>
    <div>
        <north-header title="用户" />
        <div class="list-container">
            <div class="section"
                 v-for="(item,index) in usersList"
                 :key="index">
                <span v-text="'用户名:' + item.username"
                      class="test"></span>
                <span v-text="'密码:' + item.password"></span>
            </div>
        </div>
        <cube-button class="button"
                     @click="btnClick">Button</cube-button>
    </div>
</template>

<script>
import NorthHeader from '../components/NorthHeader'
export default {
    data() {
        return {
            usersList: []
        }
    },
    mounted() {
        this.$http
            .post('/api/getUserInfo')
            .then((res) => {
                this.usersList = res.data
            })
            .catch((err) => { })
    },
    methods: {
        btnClick() {
            let instance = this.$createModal()
            instance.show()
        }
    }
}
</script>

<style lang="stylus">
.list-container {
    width: 95%;
    margin: auto;
    display : flex;
    flex-direction : column ;
    align-items : center;
    .section {
        width: 100%;
        margin 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            flex: 1;
        }
    }
}
</style>
