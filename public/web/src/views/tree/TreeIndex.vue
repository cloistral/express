<template>
  <div class="bg">
    <north-header title="测试" style="background-color:transparent">
      <div slot="right" @click="$router.forward({path:'/treeIndex/treeChild'},'child')">添加</div>
    </north-header>
    <north-child-view/>
  </div>
</template>

<script>

export default {}
</script>

<style lang="stylus" scoped>
.bg {
  background: url('../../assets/wall.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
</style>
