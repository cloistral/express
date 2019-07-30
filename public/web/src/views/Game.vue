<template>
    <div>
        <north-header title="Game" />
        <div class="canvas-container">
            <canvas ref="canvas"
                    :width="width"
                    @touchend.capture="touchEnd($event)"
                    @touchmove.capture="touchmove($event)"
                    @touchstart.capture="touchStart($event)"
                    id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cxt: null,
            width: window.innerWidth,
        }
    },
    mounted() {
        this.initCanvas()
    },
    methods: {
        initCanvas() {
            let canvas = this.$refs.canvas
            this.cxt = canvas.getContext('2d')
            this.drawHead()
            this.drawFace()
            this.drawEye()
        },
        drawHead() {
            this.cxt.beginPath();//起始路径
            this.cxt.lineWidth = 1;//线宽度为1
            this.cxt.strokeStyle = '#000';//笔触的颜色
            let x = this.width / 2
            this.cxt.arc(x, 75, 75, 0.7 * Math.PI, 0.3 * Math.PI);//绘制弧，中心点（200，175），半径175
            this.cxt.fillStyle = '#0bb0da';//设置填充时的颜色
            this.cxt.fill();//填充颜色
            this.cxt.stroke();//绘制路径
        },
        drawFace() {
            this.cxt.beginPath();
            this.cxt.fillStyle = '#fff';
            this.cxt.moveTo(this.width / 2 - 50, 50);
            this.cxt.quadraticCurveTo(this.width / 3, 75, this.width / 2 - 40, 120);
            this.cxt.lineTo(this.width / 2 - 40 + 40 + 40, 120);
            this.cxt.quadraticCurveTo(this.width / 3 * 2, 75, this.width / 2 - 50 + 50 + 50, 50);
            this.cxt.fill();
            this.cxt.stroke();
        },
        drawEye() {
            this.cxt.beginPath();
            this.cxt.fillStyle = '#fff'
            this.cxt.moveTo(this.width / 2 - 50, 50)
            this.cxt.quadraticCurveTo(this.width / 2 - 25, 10, this.width / 2, 50);
            this.cxt.quadraticCurveTo(this.width / 2 - 25, 10, this.width / 2, 50);
            this.cxt.fill();
            this.cxt.stroke();
        },
        touchEnd(e) { },
        touchmove(e) { },
        touchStart(e) { }
    }
}
</script>

<style lang="stylus" scoped>
.canvas-container {
    width: 100%;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    canvas {
        width: 100%;
        height: auto;
    }
}
</style>
