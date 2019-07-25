<template>
    <div class="index-bg">
        <div class="center-text">
            <cube-button class="button"
                         @click="btnClick(1)">1</cube-button>
             <cube-button class="button"
                         @click="btnClick(2)">2</cube-button>             
            <cube-button class="button"
                         @click="$router.forward({ path: '/treeIndex' })">Button</cube-button>
            <!-- <div v-for="(item,index) in dataTextList" :key="index" ref="textRefs">
        <span v-text="item"></span>
      </div> -->
        </div>
    </div>
</template>

<script>
import Test from '../components/modal/Test'
import Options from '../components/modal/Options'
export default {
    data() {
        return {
            modal1: null,
            modal2 : null,
            dataTextList: [
                '我怕实现模糊了,',
                '看不清你的样子。',
                '我怕眼泪流出来,',
                '会浇灭那微弱的花火。',
                '我怕幸福转瞬即逝,',
                '与你渐行渐远。',
                '我要睁大眼睛,',
                '仔细看着你。',
                '因为,我害怕遗忘!'
            ]
        }
    },
    mounted() {
        this.modal1 = this.$createModal({
            title:'111',
            component:Test,
            rightBtn : {
                title : '了解',
                icon : '',
                callback : () => {
                    console.log(22222)
                }
            }
        })
        this.modal2 = this.$createModal({component:Options,isMount:false})
        this.$nextTick(() => {
            anime({
                targets: this.$refs.textRefs,
                opacity: [0, 1],
                scale: [0, 1],
                translateX: 0,
                // easing: 'easeOutCubic',
                easing: 'spring(1, 80, 10, 0)',
                duration: 1000,
                delay: anime.stagger(1000),
                complete: () => {
                    let time = setTimeout(() => {
                        // this.$router.forward({ path: '/treeIndex' })
                        clearTimeout(time)
                    }, 1000)
                }
            })
        })
    },
    destroy() {
        // this.modal1.remove()
    },
    methods: {
        btnClick(par) {
            console.log(par)
            let ref = 'modal' + par
            this[ref].show()
        }
    }
}
</script>

<style lang="stylus">
.index-bg {
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .center-text {
        width: 60vw;
        height: 60vh;
        font-weight: bold;
        line-height: 1rem;
        color: #000000;
    }
}
</style>
