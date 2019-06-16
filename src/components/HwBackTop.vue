<template>
  <div 
    class="hw-back-top"
    v-back="{ container, distance }"
    @click="toTop"
  >
    TOP
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    distance: Number,
    container: String
  },
  methods: {
    toTop () {
      document.querySelector(this.container).scrollTop = 0
    }
  },
  created () {
    console.log(this.distance)
  },
  directives: {
    back: {
      inserted (el, binding) {
        console.log({el, binding})
        // 滚动事件
        // console.log(document.querySelector(binding.value.container).scrollHeight)
        document.querySelector(binding.value.container).addEventListener('scroll', (e) => {
          if (e.target.scrollTop > binding.value.distance) {
            el.style.display = "block"
          } else {
            el.style.display = "none"
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.hw-back-top {
  display: none;
  position: fixed;
  right: 20px;
  bottom: 70px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(255, 0, 0, 0.8);
  background-color: #e00;
  border-radius: 50%;

}
</style>
