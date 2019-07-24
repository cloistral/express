<template>
  <div class="bg">
    <north-header title="测试" style="background-color:transparent">
      <div slot="right" @click="$router.forward({path:'/treeIndex/treeChild'},'child')">添加</div>
    </north-header>
    <tree-child-view />
  </div>
</template>

<script>
import TreeChildView from '@/components/NorthChildView'
export default {
	components: {
		'tree-child-view': TreeChildView
	}
}
</script>

<style lang="stylus" scoped>
.bg {
  background: url('../../assets/wall.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
</style>
