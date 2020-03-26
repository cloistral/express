
import { Scroll } from 'cube-ui'

export default {
    data() {
        return {

        }
    },
    props: Object.assign({}, Scroll.props, {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        direction: {
            type: String,
            default: 'vertical'
        },
        options: {
            type: Object,
            default() {
                return {
                    observeDOM: true,
                    click: true,
                    probeType: 1,
                    scrollbar: true,
                    pullDownRefresh: true,
                    pullUpLoad: true
                }
            }
        }
    }),

    mounted() {

    },

    methods: {
        onPullDown() {
            setTimeout(() => {
                this.$refs.scrollRef.forceUpdate()
            }, 1000);
        },
        onPullup() {
            console.log('pull-up')
        }
    },
    render(createElement) {
        const props = Object.assign({}, this.$props)

        const scroll = (
            <Scroll ref="scrollRef" {...{ props, scopedSlots: { ...this.$scopedSlots } }}
                onPulling-down={this.onPullDown}
                onPulling-up={this.onPullup}>
                {Object.keys(this.$slots).map(name => (<template slot={name}>{this.$slots[name]}</template>))}
            </Scroll>
        )

        return (
            <div>
                {scroll}
            </div>
        )
    }
}