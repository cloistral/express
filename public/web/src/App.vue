<template>
  <div id="app">
     <north-header />
     <north-view />
  </div>
</template>

<script>
import NorthView from '@/components/NorthView'
import NorthHeader from '@/components/NorthHeader'
export default {
    name: 'app',
    data() {
      return {}
    },
    components : {
      'north-view' : NorthView,
      'north-header' : NorthHeader
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
