<template>
    <div>
        <north-header title="子组件"/>
        <cube-button class="button" @click="$router.forward({path:'/treeIndex/treeSecond'},'child')">Button</cube-button>
        <div v-for="item in 1000" :key="item">
            item
        </div>
    </div>
</template>
