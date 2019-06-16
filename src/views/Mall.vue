<template>
  <div class="hw-mall">
    <div class="hw-mall-sidebar">
      <ul>
        <router-link
        tag="li"
        v-for="tab in list"
        :to="`/mall/${tab.id}`"
        :key=tab.id
        :id=tab.id>
        {{tab.name}}
        </router-link>
      </ul>
    </div>
    <div class="hw-mall-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import * as ajax from '@/request'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    ajax.getTabs().then(resp => {
      let { list } = resp.data
      // 当第0条数据不想要时
      list = list.slice(1)
      this.list = list
      // 第一次进入时默认跳到第0条tab
      const { proId = list[0].id } = this.$route.params
      this.$router.push(`/mall/${proId}`)
      console.log(resp.data)
      // this.$router.push(`/mall/${list[0].id}`)
    })
  }
}
</script>

<style lang="scss">
$gray: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;

.hw-mall {
  display: flex;
  height: 100%;

  &-sidebar {
    width: 80px;
    background-color: $gray;
    overflow-x: hidden;
    padding-top: 6px;
    color: $deepGrey;

    li {
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      padding-left: 8px;
      border-left: 2px solid $gray;

      &.router-link-exact-active,
      &.router-link-active {
        background-color: #fff;
        border-left: 2px solid $mainColor;
      }
    }
  }
  &-main {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
