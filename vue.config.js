module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.xiongmaoyouxuan.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
