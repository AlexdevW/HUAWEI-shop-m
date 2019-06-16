<template>
  <div class="dm-detail">
    <div class="dm-detail-main">
      <div class="dm-detail-banners">
        <mt-swipe :auto="3000" class="dm-detail-banners__swipe">
          <mt-swipe-item
            v-for="photo in detail.photos"
            :key="photo.id"
          >
            <img :src="photo.url" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="dm-detail-title"><mt-badge size="small" color="#FF4040">{{detail.couponStatus}}</mt-badge>{{detail.title}}</p>
      <p class="dm-detail-price">￥{{detail.price}}</p>
    </div>
    <div class="dm-detail-footer">
      <p class="dm-detail-footer-btn"
        @click="onAddCart({
          id: detail.id,
          image: detail.photos[0].url,
          price: detail.price,
          title: detail.title
        })"
      >加入购物车</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      id: '',
      detail: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    this.$http.getDetail(this.id).then(resp => {
      this.detail = resp.data.detail
      this.changeHeaderTitle(this.detail.title)
    })
  },
  methods: {
    ...mapMutations([
      'onAddCart',
      'changeHeaderTitle'
    ])
  }
}
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;
.dm-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-main {
    flex: 1;
  }
  &-banners {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;

    &__swipe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;

      img {
        width: 100%;
      }
    }
  }
  &-title {
    font-size: 12px;
    color: $deepGrey;
    line-height: 30px;
  }

  &-footer {
    height: 50px;

    &-btn {
      text-align: center;
      background-color: $mainColor;
      margin: 0 6px;
      border-radius: 3px;
      line-height: 30px;
      color: #fff;
    }

  }
}

</style>
