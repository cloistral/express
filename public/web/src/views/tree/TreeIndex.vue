<template>
    <div>
        <north-header title="父组件"/>
        <cube-button class="button" @click="$router.forward({path:'/treeIndex/treeChild'},'child')">Button</cube-button>
        <tree-child-view />
    </div>
</template>

<script>
import TreeChildView from '@/components/NorthChildView'
export default {
    components : {
        'tree-child-view' : TreeChildView
    }
}
</script>

<style lang="stylus" scoped>
.bg {
    background : url('../../assets/tree.jpg') no-repeat;
    background-size contain;
    background-position center center;
}
</style>
