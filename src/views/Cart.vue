<template>
  <div>
    <div v-if="isCartEmpty">
      购物车是空的，你太穷了！！！
    </div>
    <div v-else>
      <HwCartItem
        v-for="item in cart"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :count="item.count"
        :isCheck="item.isCheck"
      ></HwCartItem>
      <label><input type="checkbox" :checked="totalCheckedAll" @click="totalChecked(totalCheckedAll)"><span></span>全选</label>
      <span class="delBtn" @click="delBtnAll(totalCheckedAll)">删除</span>
      <p>一共有{{totalCount}}件商品，已选择{{totalCheckedCount}}件，总价为￥{{totalCheckedPrice | toFix2}}</p>
    </div>
    </div>
</template>

<script>
import HwCartItem from '@/components/HwCartItem'
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  components: {
    HwCartItem
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'totalCount',
      'totalCheckedCount',
      'totalCheckedPrice',
      'totalCheckedAll',
      'isCartEmpty'
    ])
  },
  methods: {
    ...mapMutations([
      'totalChecked',
      'delBtnAll'
    ])
  }
}
</script>

<style lang="scss" scoped>
$grey: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;
label {
  width:20px;
  line-height: 30px;
    input {
      display: none;
      &:checked {
      + span {
        background: $mainColor;
        border: 0;

        &::after {
          width: 8px;
          height: 12px;
          position: absolute;
          top: 0;
          left: 5px;
          content: "";
          border: 2px solid #fff;
          border-width: 0px 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid $deepGrey;
    box-sizing: border-box;
    position: relative;
    margin-right: 12px;
    top: 4px;
    left: 10px;
  }
}
.delBtn {
  float: right;
  margin: 6px 10px 0 0;
  line-height: 20px;
  font-size: 12px;
  color: #fff;
  background: $mainColor;
  padding: 0 6px;
  border-radius: 16px;
}
</style>
