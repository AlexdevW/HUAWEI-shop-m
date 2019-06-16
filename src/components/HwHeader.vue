<template>
  <div class="Hw-header">
    <mt-header :title="headerTitle" class="Hw-header-wrap">
      <span to="/" @click="goBack" slot="left">
        <mt-button icon="back" v-show="headerBackShow">返回</mt-button>
      </span>
    </mt-header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    goBack () {
      // 如果有from参数，说明是从需要登录权限的页面跳转过来的，那么这个时候不登陆是回不去的，所以就返回首页
      // 没有from参数，说明是正常跳转，那么就沿着历史纪录回去就行了
      const {from} = this.$route.params
      if (from) {
        this.$router.push('/')
      } else {
        this.$router.back()
      }
    }
  },
  computed: {
    ...mapState([
      'headerBackShow',
      'headerTitle'
    ])
  }
}
</script>

<style lang="scss">
  .Hw-header {
    height: 46px;
    .mint-header {
      height: 100%;
    }
  }
</style>
