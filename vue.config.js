module.exports = {
  devServer: {
    port:8008,
    proxy:{
      '/v2':{
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite: {
          '^/v2' : '/v2'
        },
      }
    }
  },
  configureWebpack: {

  }
};