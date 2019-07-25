<template>
    <cube-scroll ref="scroll"
                 :scroll-events="['scroll']"
                 :options="scrollOptions"
                 @scroll="onScrollHandle"
                 @pulling-down="onPullingDown">
        <template slot="pulldown"
                  slot-scope="props">
            <div v-if="props.pullDownRefresh"
                 class="cube-pulldown-wrapper"
                 :style="pullDownStyle">
                <div class="pulldown-content">
                    <img src="http://om0jxp12h.bkt.clouddn.com/pulldow-img.jpg">
                    <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
                    <template v-else>
                        <span v-if="props.isPullingDown">正在更新...</span>
                        <span v-else>更新成功</span>
                    </template>
                </div>
            </div>
        </template>
    </cube-scroll>
</template>

<script>
export default {
    data() {
        return {
            options: {
                pullDownRefresh: {
                    threshold: 60,
                    stop: 40,
                    txt: '更新成功'
                }
            },
        }
    },
    computed: {
        pullDownTip() {
            if (this.pullDownY <= 60) {
                return '下拉刷新...'
            } else if (this.pullDownY <= 90) {
                return '继续下拉有惊喜...'
            } else {
                return '松手得惊喜！'
            }
        },
        headerStyle() {
            return Math.min(1, Math.max(0, 1 - this.pullDownY / 40))
        }
    },
    methods: {
        onScrollHandle(pos) {
            this.pullDownY = pos.y
            if (pos.y > 0) {
                this.pullDownStyle = `top:${pos.y}px`
                this.triggerSurpriseFlag = false
                if (this.pullDownY > 90) {
                    this.triggerSurpriseFlag = true
                }
            }
            this.$refs.topHeader.style.opacity = this.headerStyle
        },
        onPullingDown() {
            if (this.triggerSurpriseFlag) {
                this.triggerSurprise = true
                this.$refs.scroll.forceUpdate()
                return
            }
            setTimeout(() => {
                this.$refs.scroll.forceUpdate()
            }, 1000)
        },
    }
}
</script>
