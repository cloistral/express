<template>
    <div>
        <north-header title="用户"/>
        <!-- <div v-for="(item,index) in usersList" :key="index">
            <span v-text="item.username" class="test"></span>
            <span v-text="item.date"></span>
        </div> -->
        <cube-button class="button" @click="btnClick">Button</cube-button>
    </div>
</template>

<script>
import NorthHeader from '../components/NorthHeader'
export default {
    data() {
        return {
            usersList : []
        }
    },
    mounted () {
   
        return
        this.$http.post('/api/getUserInfo')
            .then(res => {
              this.usersList = res.data
            }).catch(err => {

            })   
    },
    methods : {
        btnClick() {
            // $router.forward({path:'/mine'})
            $modal.createComponent('',{
                title:'Modal'
            })
              .then(modal => {
                 modal.show()
              }) 
        }
    }
}
</script>

<style>
.test {
    transform: translateX(100%)
}
</style>
