<template>
    <div class="north-header">
        <div class="left" @click="$router.prev()">
            <img src="../assets/back_white.png" width="25">
        </div>
        <div class="middle" v-text="title"></div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
   props : ['title']
}
</script>

<style scoped lang="stylus">

.north-header {
   position: fixed;
   z-index: 9;
   top: 0;
   left: 0;
   width: 100%;
   height: 44px;
   box-sizing: border-box;
   padding: 0 5%;
   background-color: #000000;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: $large-font-size ;
}
.north-header .left {flex: 1;}
.north-header .middle {flex: 2;display: inline-flex;align-items: center;justify-content: center}
.north-header .right {flex: 1;display: flex;justify-content: flex-end;font-size: 16px}



</style>
