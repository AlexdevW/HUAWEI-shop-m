<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"
            v-for="banner in banners"
            :key="banner.id"
          >
          <img :src="banner.imageUrl" :alt="banner.title">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import SwiperCss from 'swiper/dist/css/swiper.min.css'
import * as ajax from '@/request'
import { constants } from 'crypto';
export default {
  name: 'home', // 组件的name
  data () {
    return {
      banners: ''
    }
  },
  created () {
    ajax.getHome().then(resp => {
      this.banners = resp.data.banners
      // 通过异步返回的数据去操作DOM, 那就放到nextTick里去执行
      this.$nextTick().then(() => {
        this.initSwiper()
      })
    })
  },
  activated () { // 进入
    console.log(1)
  },
  deactivated () { // 失活
    console.log(2)
  },
  methods: {
    initSwiper () {
      let mySwipier = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>
<style lang="scss">
.swiper-container {
  height: (400 / 1080) * 100%;
  width: 100%;

  // .swiper-wrapper {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }

  img {
    width: 100%;
  }
}
</style>
