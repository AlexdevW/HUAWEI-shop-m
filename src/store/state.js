export default {
  cart: JSON.parse(window.localStorage.getItem('hw-cart')) || [],
  headerBackShow: false,
  headerTitle: '华为商城',
  userinfo: JSON.parse(window.localStorage.getItem('hw-userinfo')) || {
    id: '',
    displayName: '',
    avatar: '',
    token: ''
  }
}
