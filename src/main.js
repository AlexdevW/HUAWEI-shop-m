import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
import store from '@/store'
import * as ajax from './request'

// 全局注册组件
import HwBackTop from '@/components/HwBackTop'
Vue.component('HwBackTop', HwBackTop)

Vue.use(Mint)

Vue.prototype.$http = ajax

Vue.config.productionTip = false

store.subscribe((mutations, state) => {
  // 订阅所有的mutation，只要有有一个mutation被commit，这里的代码就会执行
  window.localStorage.setItem('hw-cart', JSON.stringify(state.cart))
})

// 全局混入
Vue.mixin({
  filters: {
    countLt99 (value) {
      if (value > 99) {
        return '99+'
      } else {
        return value
      }
    },
    toFix2 (value) {
      return value.toFixed(2)
    }
  }
})

// 全局导航
router.beforeEach((to, from, next) => {
  // 修改back的显示与否
  store.commit('toggleHeaderBackShow', Boolean(to.meta.headerBackShow))
  // 修改头部title
  store.commit('changeHeaderTitle', to.meta.title)
  // 验证登录
  console.log(to)
  if (to.meta.isAuthRequired) {
    if (store.getters.isLogin === false) {
      next({
        name: 'login',
        params: { from: to.path }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
