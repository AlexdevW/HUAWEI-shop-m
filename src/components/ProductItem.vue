<template>
  <router-link :to="{name: 'detail', query: { id }}" class="hw-item" tag="div">
    <div class="hw-item-img">
      <img :src="image" alt="">
    </div>
    <p class="hw-item-title">{{title}}</p>
    <p class="hw-item-price">￥{{price}}</p>
    <p class="hw-item-btn" @click.stop="onAddCart({id, title, image, price})">加入购物车</p>
  </router-link>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    image: String,
    price: Number,
    title: String,
    id: Number
  },
  methods: {
    ...mapMutations(['onAddCart'])
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;
.hw-item {
  width: 50%;
  box-sizing: border-box;
  display: inline-block;
  padding: 8px;

  &-title {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $deepGrey;
    line-height: 20px;
  }

  &-price {
    color: #e00;
    line-height: 20px;
  }

  &-btn {
    border-radius: 4px;
    background: $mainColor;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }

  img {
    width: 100%;
  }
}
</style>
