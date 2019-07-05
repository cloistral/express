<template>
    <transition :name="transitionName">
        <router-view class="north-page"></router-view>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            transitionName : 'slide-right',
        }
    },
    watch : {
        $route (to,from) {
            console.log(this.$router)
            const toDepth = to.path
            const fromDepth = from.path
            this.transitionName = toDepth < fromDepth?'slide-right':'slide-left'
        },
        '$router.push' () {
            console.log(1111)
        }
    }
}
</script>

<style>


.north-page {
    position: absolute;
    width : 100vw;
    height : 100vh;
    box-sizing: border-box;
    overflow : auto;
    font-size : 20px;
    color : #2c3e50;
    background-color : #f5f5f5;
    overflow: hidden auto;
    padding-top: 44px;
}

.slide-left-enter-active { animation: left-in .5s}
.slide-left-leave-active { animation: left-out .5s}

@keyframes left-in {
  from {transform: translate3d(100%,0,0);opacity: 0;}
  to {transform: translate3d(0,0,0);opacity: 1;}
}

@keyframes left-out {
  from {transform: translate3d(0,0,0); opacity: 1;}
  to {transform: translate3d(-100%,0,0); opacity: 0;}
}

.slide-right-enter-active { animation: right-in .5s }
.slide-right-leave-active { animation: right-out .5s}

@keyframes  right-in{
  from {transform: translate3d(-100%,0,0);opacity: 0;}
  to {transform: translate3d(0,0,0);opacity: 1;}
}

@keyframes right-out{
  from {transform: translate3d(0,0,0);opacity: 1;}
  to {transform: translate3d(100%,0,0);opacity: 0;}
}



</style>
