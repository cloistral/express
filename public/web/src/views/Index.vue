<template>
    <div class="bg"></div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted () {
       let time = setTimeout(() => {
           this.$router.push({path:'/user'})
           clearTimeout(time)
       },1000)
    },
    methods : {}
}
</script>

<style lang="stylus">
.bg {
    background url('../assets/star_sky_bg.jpg')
    background-size cover
    background-position center center;
    display flex
    flex-direction column
    align-items center
    justify-content center
}
</style>
