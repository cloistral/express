<template>
  <transition name="slide" mode="in-out">
    <router-view class="north-child-page"></router-view>
  </transition>
</template>

<script>
export default {
	data() {
		return {
			transitionName: 'slide-down'
		}
	},
	watch: {
		$route(to, from) {
			let method = this.$router.method
			if (method == 'child') {
				this.transitionName = 'slide-top'
			}
			this.$router.method = null
		}
	}
}
</script>

<style>
.north-child-page {
	position: absolute;
	z-index: 99;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	overflow: auto;
	font-size: 20px;
	color: #2c3e50;
	background-color: #f5f5f5;
	overflow: hidden auto;
	padding-top: 44px;
}

.slide-enter-active {
	animation: top-in 0.4s;
}
.slide-leave-active {
	animation: top-out 0.4s;
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
