
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

    mounted () {
        console.log(this.forceUpdate())
    },

    methods: {
        onPullDown() {
            console.log('pull-down')
        },
        onPullup() {
            console.log('pull-up')
        }
    },
    render() {
        const props = this.$props || {}
        // Object.keys(Scroll.props).forEach(key => {
        //     props[key] = Object.assign({},Scroll[key])
        // })
        
        const scroll = (
            <Scroll {...{ props, scopedSlots: { ...this.$scopedSlots } }}
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