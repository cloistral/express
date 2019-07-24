<template>
  <div class="index-bg">
    <div class="center-text">
         <cube-button class="button" @click="btnClick">Button</cube-button>
          <cube-button class="button" @click="$router.forward({ path: '/treeIndex' })">Button</cube-button>
      <!-- <div v-for="(item,index) in dataTextList" :key="index" ref="textRefs">
        <span v-text="item"></span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
            modal : null,
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
        this.modal = this.$createModal()
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
    destroy () {
        this.modal.remove()
    },
	methods: {
        btnClick() {
            this.modal.show()
        }
    }
}
</script>

<style lang="stylus">
.index-bg {
//   background: url('../assets/bg.png');
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
