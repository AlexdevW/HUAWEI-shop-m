// import Vue from 'vue'
import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

// 所有的Vue实例都能使用这个方法
// Vue.prototype.$http = ajax

// 拦截器
ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  // 全局错误处理
  if (resp.status === 200) {
    return resp.data
  } else {
    return {
      status: 400,
      msg: '网络错误'
    }
  }
})

export const getHome = () => ajax.get('/api/tab/1?start=0')

export const getTabs = () => ajax.get('/api/tabs')

export const getProductList = (id, start = 0) => ajax.get(`/api/tab/${id}?start=${start}`)

export const getDetail = id => ajax.get(`/api/detail?id=${id}`)

export const login = userInfo => ajax.post('http://rap2api.taobao.org/app/mock/221872/user/login', userInfo)
