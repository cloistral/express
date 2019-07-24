<template>
    <transition name="slide"
                @click.stop>
        <div id="north-modal"
             class="north-modal-page"
             v-show="isShow">
            <div class="north-modal-header">
                <div class="left"
                     @click="hide()">
                    <img src="../../assets/back_white.png"
                         width="25">
                </div>
                <div class="middle">createApi</div>
                <div class="right">
                    <slot name="right"></slot>
                </div>
            </div>
            <div id="_north_modal_content"
                 class="north-modal-content"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        options: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    mounted() {
        console.log(this.$parent)
    },
    methods: {
        show() { this.isShow = true },
        hide() {
            this.$emit('click', '二狗子')
            this.isShow = false
        }
    }
}
</script>


<style lang="stylus" scoped>
.north-modal-page {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: red;

    .north-modal-header {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;

        .left {
        }

        .middle {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .right {
        }
    }

    .north-modal-content {
    }
}

.slide-enter-active {
    animation: top-in 0.4s;
}

.slide-leave-active {
    animation: top-out 0.25s;
}

@keyframes top-in {
    from {
        transform: translate3d(0, 100%, 0);
        opacity: 0;
    }

    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@keyframes top-out {
    from {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

    to {
        transform: translate3d(0, 100%, 0);
        opacity: 0;
    }
}
</style>
