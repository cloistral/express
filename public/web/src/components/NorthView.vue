<template>
    <transition :name="transitionName">
        <router-view class="north-page"></router-view>
    </transition>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
    data() {
        return {
            transitionName : 'slide-right',
        }
    },
    watch : {
        $route (to,from) {
            if(this.$router.method == 'push') {
                this.transitionName = 'slide-left'
            }else {
                this.transitionName = 'slide-right'
            }
            let time = setTimeout(() => {
                this.$router.method = null
                clearTimeout(time)
            },5)
        }
    }
}
</script>

<style lang="stylus">


.north-page {
    position: absolute;
    width : 100vw;
    height : 100vh;
    box-sizing: border-box;
    overflow : hidden;
    font-size : 20px;
    color : #2c3e50;
    background-color : #f5f5f5;
    overflow: hidden auto;
    padding-top: 44px;
    font-size: $base-font-size;
}

.slide-left-enter-active { animation: left-in .4s}
.slide-left-leave-active { animation: left-out .4s}

@keyframes left-in {
  from {transform: translate3d(100%,0,0);opacity: 0;}
  to {transform: translate3d(0,0,0);opacity: 1;}
}

@keyframes left-out {
  from {transform: translate3d(0,0,0); opacity: 1;}
  to {transform: translate3d(-100%,0,0); opacity: 0;}
}

.slide-right-enter-active { animation: right-in .3s }
.slide-right-leave-active { animation: right-out .3s}

@keyframes  right-in{
  from {transform: translate3d(-100%,0,0);opacity: 0;}
  to {transform: translate3d(0,0,0);opacity: 1;}
}

@keyframes right-out{
  from {transform: translate3d(0,0,0);opacity: 1;}
  to {transform: translate3d(100%,0,0);opacity: 0;}
}



</style>
