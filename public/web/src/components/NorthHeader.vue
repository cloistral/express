<template>
    <div class="north-header">
        <div class="left" @click="$router.back()">
            <img src="../assets/back.png">
        </div>
        <div class="middle">首页</div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    methods : {
       
    }
}
</script>

<style scoped>

.north-header {
   position: fixed;
   z-index: 99;
   top: 0;
   left: 0;
   width: 100%;
   height: 44px;
   box-sizing: border-box;
   padding: 0 2.5%;
   display: flex;
   align-items: center;
   justify-content: center;
}
.north-header .left {flex: 1}
.north-header .middle {flex: 2;display: inline-flex;align-items: center;justify-content: center}
.north-header .right {flex: 1}



</style>
