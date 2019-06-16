export default {
  totalCount (state) {
    return state.cart.reduce((total, current) => {
      total += current.count
      return total
    }, 0)
  },
  totalCheckedCount (state) {
    return state.cart.reduce((total, current) => {
      total += current.isCheck ? current.count : 0
      return total
    }, 0)
  },
  totalCheckedPrice (state) {
    return state.cart.reduce((total, current) => {
      total += current.isCheck ? current.price * current.count : 0
      return total
    }, 0)
  },
  totalCheckedAll (state) {
    return state.cart.every(item => {
      return item.isCheck === true
    })
  },
  isCartEmpty (state) {
    return state.cart.length === 0
  },
  isLogin (state) {
    console.log(Boolean(state.userinfo.token))
    return Boolean(state.userinfo.token)
  }
}
