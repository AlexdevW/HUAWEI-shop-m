<template>
  <div>
    <mt-field label="用户名：" placeholder="用户名" v-model="username"></mt-field>
    <mt-field label="密码：" placeholder="密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" size="large" @click="onLogin">登录</mt-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapActions(['loginAction']),
    onLogin () {
      let username = this.username
      let password = this.password
      this.loginAction({ username, password })
      console.log(this.isLogin)
    }
  },
  watch: {
    isLogin (newV, oldV) {
      if (newV === true) {
        console.log(this.$route)
        const { from } = this.$route.params
        if (from) {
          this.$router.push(from)
        } else {
          this.$router.back()
        }
        
      }
    }
  }
}
</script>

<style>

</style>
