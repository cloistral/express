<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="cell">
        <span>用户名</span>
        <cube-input v-model="param.username" placeholder="请输入用户名"></cube-input>
    </div> 
    <div class="cell">
        <span>密码</span>
        <cube-input class="cube-input" v-model="param.password" placeholder="请输入密码"></cube-input>
    </div> 
    <cube-button class="button" @click="submit">Button</cube-button>
    <div @click="getUserInfo" style="margin:20px">getUserInfo</div>
    <div>
       <div v-text="'用户民:' + info.username"></div>
       <div v-text="'密码' + info.password"></div>
       <div v-text="'uid' + info.uid"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
     return {
       info : '',
       param : {
         username : '',
         password : ''
       }
     }
  },
  mounted() {
   
  },
  methods : {
      submit() {
        if(!this.param.username && !this.param.password) {
            const toast = this.$createToast({
              time: 1000,
              txt: '请输入用户名和密码'
            })
            toast.show()
          return;
        }
        this.$http.get('/api/login',{params:this.param})
            .then(res => {
                localStorage.token = res.token
            })
      },
      getUserInfo() {
        this.$http.post('/api/getUserInfo')
            .then(res => {
              this.info = res
            }).catch(err => {

            }) 
      }
  },
}
</script>

<style lang="stylus" scoped>
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align center
  color #2c3e50
  margin-top: 60px;
.cell 
  width 80%
  height 40px
  margin 20px auto
  font-size 15px
  display flex
  align-items center
  justify-content space-between
  span 
   width 20%; 
  .cube-input 
    flex 1
    margin-left 20px
.button 
  width 30%
  margin 20px auto    
</style>
