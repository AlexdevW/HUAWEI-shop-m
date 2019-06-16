<template>
  <div
    v-infinite-scroll="onLoadMore"
    infinite-scroll-distance="10"
    infinite-scroll-disabled="isLoading" 
  >
    <ProductItem
      v-for="productItem in list"
      :key="productItem.id"
      :id="productItem.id"
      :image="productItem.image"
      :price="productItem.price"
      :title="productItem.title"

    ></ProductItem>
    <p v-if="!isEnd" @click="onLoadMore" class="hw-btn-load__more">加载更多...</p>
    <p v-else class="hw-btn-load__more">我是有底线的...</p>
    <HwBackTop
      container=".hw-mall-main"
      :distance="400"
    ></HwBackTop>
  </div>

</template>

<script>
import * as ajax from '@/request'
import ProductItem from '@/components/ProductItem'
export default {
  data () {
    return {
      isEnd: false,
      list: [],
      nextIndex: 0,
      id: '',
      isLoading: false
    }
  },
  components: {
    ProductItem
  },
  // created () {
  //   let id = this.$route.params.proId
  //   this.getList(id)
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.id = to.params.proId
      vm.getList()
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 从to的获取id值然后重新请求数据
    this.id = to.params.proId
    // 重新从start0开始请求新的分类商品列表
    this.nextIndex = 0
    this.list = []
    next()
    this.getList()
  },
  methods: {
    // 请求列表的方法
    getList () {
      this.isLoading = true // 解决重复请求bug
      ajax.getProductList(this.id, this.nextIndex).then(resp => {
        console.log(resp.data.items)
        // this.list = resp.data.items.list
        this.list = this.list.concat(resp.data.items.list)
        // this.list = [...this.list, ...resp.data.items.list]
        this.nextIndex = resp.data.items.nextIndex
        this.isEnd = resp.data.items.isEnd
        this.isLoading = false
      })
    },

    onLoadMore () {
      this.getList()
    }
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;
.hw-btn-load__more {
  background-color: $mainColor;
  color: #fff;
  text-align: center;
  padding: 6px;
  margin: 0 6px;
  border-radius: 3px;

}
</style>
