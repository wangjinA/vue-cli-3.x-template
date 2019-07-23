module.exports = {
  publicPath:'./',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://...',
        changeOrigin: true,
        pathRewrite: {
          '^/api' : ''
        }
      }
    },
    port: 8080
  },
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/assets/styl/variable.styl', '~@/assets/styl/base.styl'] // 全局css变量和全局css
      }
    }
  }
}