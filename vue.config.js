const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //lintOnSave:false,//关闭语法检查


  devServer: {
    host: '127.0.0.1',
    port: 8080,
    historyApiFallback: true,
    allowedHosts: "all"
  }
})