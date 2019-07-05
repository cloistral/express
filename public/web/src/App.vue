<template>
  <div id="app">
     <north-view />
  </div>
</template>

<script>
import NorthView from '@/components/NorthView'
export default {
    name: 'app',
    data() {
      return {}
    },
    components : {
      'north-view' : NorthView,
    }
}
</script>

<style lang="stylus" scoped>
#app 
  width 100vw;
  height 100vh;
  overflow hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position relative

</style>
