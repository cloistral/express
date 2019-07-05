<template>
    <div>
        <north-header/>
        <!-- <div v-for="(item,index) in usersList" :key="index">
            <span v-text="item.username" class="test"></span>
            <span v-text="item.date"></span>
        </div> -->
         <cube-button class="button" @click="$router.push({path:'/treeIndex'})">Button</cube-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usersList : []
        }
    },
    mounted () {
        this.$http.post('/api/getUserInfo')
            .then(res => {
              this.usersList = res.data
            }).catch(err => {

            })   
    }
}
</script>

<style>
.test {
    transform: translateX(100%)
}
</style>
