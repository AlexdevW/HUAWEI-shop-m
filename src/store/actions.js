import * as ajax from '@/request'
export default {
  loginAction (ctx, userinfo) {
    ajax.login(userinfo).then(resp => {
      window.localStorage.setItem('hw-userinfo', JSON.stringify(resp.data.data.userinfo))
      ctx.commit('toggleIsLogin', resp.data.data.userinfo)
    })
  }
}
