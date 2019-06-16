<template>
  <ul class="Hw-footer">
    <router-link
      :event="$route.path.includes(tabbar.path) ? '' : 'click'"
      tag="li"
      v-for="tabbar in tabbars"
      :to="tabbar.path"
      :key="tabbar.name"
      >
      <i class="icon" v-html="tabbar.meta.icon"></i>
      <span>{{tabbar.meta.title}}</span>
      <b v-if="tabbar.name === 'cart' && totalCount">{{totalCount | countLt99}}</b>
    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '@/router/routes'
export default {
  data () {
    return {
      tabbars: routes.filter(route => route.meta.isTabbar)
    }
  },
  computed: {
    ...mapGetters(['totalCount'])
  }
}
</script>

<style lang="scss">
$mainColor: #26a2ff;
  .Hw-footer {
    display: flex;
    height: 52px;
    justify-content: space-around;
    border-top: 1px solid #ddeedd;
    text-align: center;

    .router-link-exact-active,
    .router-link-active {
      color: $mainColor;
    }

    li {
      position: relative;
    }

    i {
      display: block;
      line-height: 30px;
      font-size: 18px;
    }

    span {
      line-height: 10px;
      font-size: 12px;
    }

    b {
      position: absolute;
      background-color: #e00;
      color: #fff;
      border-radius: 50%;
      line-height: 16px;
      font-size: 12px;
      padding: 0 4px;
      top: 1px;
      left: 30px;
    }
  }
</style>
