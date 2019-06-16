import {
  TOGGLE_IS_CHECK,
  COUNT_DECREMENT,
  COUNT_INCREMENT,
  COUNT_CHANGE,
  TOTAL_CHECKED,
  DEL_BTN,
  DEL_BTN_ALL,
  ON_ADD_CART,
  TOGGLE_HEADER_BACKSHOW,
  CHANGE_HEADER_TITLE,
  TOGGLE_IS_LOGIN
} from './mutationTypes'

export default {
  [TOGGLE_IS_CHECK] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) item.isCheck = !item.isCheck
      return item
    })
  },
  [COUNT_DECREMENT] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        if (item.count > 1) item.count--
      }
      return item
    })
  },
  [COUNT_INCREMENT] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) item.count++
      return item
    })
  },
  [COUNT_CHANGE] (state, data) {
    state.cart = state.cart.map(item => {
      if (item.id === data.id) item.count = data.val
      return item
    })
  },
  [TOTAL_CHECKED] (state, isCheck) {
    state.cart = state.cart.map(item => {
      item.isCheck = !isCheck
      return item
    })
  },
  [DEL_BTN] (state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
  },
  [DEL_BTN_ALL] (state, isCheck) {
    if (isCheck) state.cart = []
  },
  [ON_ADD_CART] (state, shopInfo) {
    const isExist = state.cart.some(item => item.id === shopInfo.id)
    if (isExist) {
      state.cart = state.cart.map(item => {
        if (item.id === shopInfo.id) item.count++
        return item
      })
    } else {
      state.cart.push({ ...shopInfo, count: 1, isCheck: true })
    }
  },
  [TOGGLE_HEADER_BACKSHOW] (state, headerBackShow) {
    state.headerBackShow = headerBackShow
  },
  [CHANGE_HEADER_TITLE] (state, title) {
    state.headerTitle = title
  },
  [TOGGLE_IS_LOGIN] (state, userinfo) {
    state.userinfo = userinfo
    console.log(state.userinfo)
  }
}
