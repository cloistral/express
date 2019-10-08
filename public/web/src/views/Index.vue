<template>
    <div class="index-bg">
        <div class="center-text">
            <cube-button class="button"
                         @click="btnClick(1)">1</cube-button>
            <cube-button class="button"
                         @click="$router.forward({ path: '/login' })">Button</cube-button>
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
            title: '111',
            component: Test,
        })
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
                        clearTimeout(time)
                    }, 1000)
                }
            })
        })
    },
    destroy() {
      
    },
    methods: {
        btnClick(par) {
            this.modal1.show()
        }
    }
}
</script>

<style lang="stylus">
.index-bg
    background-size cover
    background-position center center
    display flex
    flex-direction column
    justify-content center
    align-items center
    .center-text
        width 60vw
        height 60vh
        font-weight bold
        line-height 1rem
        color #000000
</style>
