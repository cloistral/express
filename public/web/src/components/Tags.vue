<template>
    <div class="tags-component">
        <svg width="100%" 
             height="100%" 
             viewbox="0 0 50 50"
             style="background-color:green"
             preserveAspectRatio="xMidYMid meet">
            <path :d="svgPath" style="fill:#000"/>
        </svg> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            svgPath : ''
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.svgPath = 
            'M15 15 ' +  //起点
            'L15 100 ' +  //左边竖直线
            'Q15,120 5,140 Q30,140 15 140' + //left 下的贝塞尔曲线 
            'H150 130 ' +  //底部直线
            'V130 15' +  //右部竖线
            'L110 15 V110 20 Q 120,25 110,30'  +  //right 豁口
            'C130,50 80,50 100 30'  + 
            'Q90,25 100,20' + 
            'L100 15' +   //left 豁口
            'L50 15 V50 20 Q 60,25 50,30'  + 
            'C65,50 25,50 40 30'  + 
            'Q30,25 40 20 V30 15'
            'Z'  
        })
    }
}
</script>

<style lang="stylus" scoped>
.tags-component {
   width 100px;
   height 100px;
}
</style>
