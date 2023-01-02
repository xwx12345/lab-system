// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     configureWebpack:{
//         devtool:'source-map'
//     },
//     transpileDependencies: true,
//     lintOnSave: false,
//     devServer: {
//         proxy: {
//             '/api/': {
//                 target: 'https://localhost:8080/',
//                 // target: 'http://124.220.158.211:5000/',
//                 // ↑这个就是你的接口地址↑
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': '/api'
//                 }
//             }
//         }
//     }
// })
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
