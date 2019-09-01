// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      
      }
    }
  }
}