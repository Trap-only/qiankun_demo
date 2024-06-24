const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: "/", // 打包相对路径
  devServer: {
    port: 7663, // 运行端口号
    headers: {
      "Access-Control-Allow-Origin": "*", // 防止加载时跨域
    },
  },
  chainWebpack: (config) => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
});
