import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // 得到当前的开发状态，生成环境线上环境 || 开发环境
  strict: process.env.NODE_ENV === 'development', // 是否是开发环境
  state,
  mutations,
  actions,
  getters
})
