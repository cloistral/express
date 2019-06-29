<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div @click="getUserInfo">getUserInfo</div>
    <div v-text="info"></div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
     return {
       info : ''
     }
  },
  mounted() {
    this.init()
  },
  methods : {
      init() {
      let params = {username:'wangpeng',password:123456}
        this.$http.get('/api/login',{params:params})
            .then(res => {
                localStorage.token = res.token
            })
      },
      getUserInfo() {
        this.$http.post('/api/getUserInfo')
            .then(res => {
              this.info = '用户名' + res.username + '密码' + res.password + 'uid' + res.uid
            }).catch(err => {

            }) 
      }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
