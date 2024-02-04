const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,//关闭语法检查

    // 开启代理服务器
    devServer: {
        //方式一
        //proxy: 'http://localhost:5000',
        //方式二
        // proxy:{
        //     '/atguigu':{
        //         target:'http://localhost:5000',
        //         pathRewrite:{'^/atguigu':''},
        //         ws: true, //用于支持websocket
        //         changeOrigin: true, //用于请求头中的host值
        //     }
        // },
        historyApiFallback: true,
        allowedHosts: "all"
    }
})