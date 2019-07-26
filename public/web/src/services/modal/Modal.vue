<template>
    <transition name="slide"
                @click.stop>
        <div id="modal"
             class="north-modal-page"
             v-show="isShow">
            <div class="north-modal-content"
                 ref="placeParent">
            </div>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'Modal',
    props: {
        component: {
            //传递过来的组件
            type: Object,
            default: null
        },
    },
    data() {
        return {
            isShow: false,  //modal是否显示隐藏
            instance: null, //组件实例
            id: 'north_' + Math.random().toString(36).substr(3, 6)
        }
    },
    mounted() {
        this.initPlaceComponent()
    },
    methods: {
        //创建占位标签
        initPlaceComponent() {
            let parent = this.$refs.placeParent
            let place = document.createElement('div')
            place.setAttribute('id', this.id)
            parent.appendChild(place)
        },
        mountComponent(options) {
            console.log(options)
            if (!this.component) return;
            this.$nextTick(() => {
                let Instance = Vue.extend(this.component)
                let target = document.querySelector('#' + this.id)
                this.instance = new Instance({
                    propsData: { options : options }
                }).$mount(target)
                this.instance.$parent = this //将子组件的$parent属性指向自己
                this.instance.$on('back', (res) => {

                })
            })
        },
        destroyComponent() {
            this.$nextTick(() => {
                if (this.instance) {
                    let parent = this.$refs.placeParent
                    this.instance.$destroy()
                    parent.removeChild(this.instance.$el)
                }
                this.initPlaceComponent()
            })
        },
        showModal(options) {
            this.isShow = true
            this.mountComponent(options)
        },
        hide() {
            this.isShow = false
            this.destroyComponent()
        }
    },
    destroy() {
        this.instance.$destroy()
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
    background-color: #f5f5f5;
    font-size: $base-font-size;
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
        width: 100%;
        height: 100%;
        overflow: hidden auto;
        box-sizing: border-box;
        padding-top: 44Px;
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
