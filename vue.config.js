module.exports = {
  devServer: {
    port:8008,
    proxy:{
      '/api': {
        target: 'http://abc.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }
  },
  configureWebpack: {

  }
};