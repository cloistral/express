<template>
    <transition name="slide" @click.stop>
        <div id="north-modal" class="north-modal-page" v-show="state === 1">
            <div class="north-modal-header">
                <div class="left" @click="hide()">
                    <img src="../../assets/back_white.png" width="25">
                </div>
                <div class="middle" v-text="options.title"></div>
                <div class="right">
                    <slot name="right"></slot>
                </div>
            </div>
            <div id="_north_modal_content" class="north-modal-content"></div>
        </div>
    </transition>
</template>

<script>
  const show_modal_animate_dur = 400
  const hide_modal_animate_dur = 250
export default {
    props : {
        options : {
            type : Object,
            default : null,
        }
    },
    name : 'Modal',
    data () {
        return { 
            state : 0 
        }
    },
    methods : {
        show() {
           let time = setTimeout(() => {
                this.state = 1
                clearTimeout(time)
           },show_modal_animate_dur);
        },
        hide() {
            let time = setTimeout(() => {
                this.state = 0
                clearTimeout(time)
           },hide_modal_animate_dur);
        }
    }
}
</script>


<style lang="stylus" scoped>
.north-modal-page {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: red;
    .north-modal-header {
        width : 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        .left {}
        .middle {
            flex:1;
            display:flex;
            align-items: center;
            justify-content:center
        }
        .right {}
    }
    .north-modal-content {}
}

.slide-enter-active {animation: top-in .4s}
.slide-leave-active {animation: top-out .25s}

@keyframes  top-in{
  from {transform: translate3d(0,100%,0);opacity: 0;}
  to {transform: translate3d(0,0,0);opacity: 1;}
}

@keyframes top-out{
  from {transform: translate3d(0,0,0);opacity: 1;}
  to {transform: translate3d(0,100%,0);opacity: 0;}
}

</style>
