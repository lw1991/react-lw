// 配置文档地址：https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation

const path = require("path");
const apiMocker = require('mocker-api')
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  style: {
    sass: {
      loaderOptions: { // 配置scss全局变量
        prependData: `
          @import "static/scss/constant.scss";
          @import "static/scss/mixins.scss";
        `,
      },
    },
    postcss: {
      plugins: [],
      env: {
        autoprefixer: {},
        stage: 3,
      },
    },
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      src: resolve("src"),
      api: resolve("src/api"),
      store: resolve("src/store"),
      routes: resolve("src/routes"),
      static: resolve("src/static"),
      persentational: resolve("src/persentational"),
      containers: resolve("src/containers"),
    },
    configure: (webpackConfig, { env, paths }) => {
      // 生产环境做些什么
      if (env === "production") {
        webpackConfig.optimization.minimizer[0].options.terserOptions.compress = {
          ...webpackConfig.optimization.minimizer[0].options.terserOptions.compress,
          drop_console: true, // 去除console
          drop_debugger: true, // 去除debugger
          warnings: false // 隐藏warning
        }
        // 生产环境关闭souceMap，提升打包速度
        webpackConfig.devtool = false
      }
      return webpackConfig;
    },
    plugins: [
      // 打压缩包 服务器已经做过处理
      // new CompressionWebpackPlugin({
      //   algorithm: "gzip",
      //   test: /\.js$|\.html$|\.css/,
      //   threshold: 1024,
      //   minRatio: 0.8,
      // }),
    ],
    optimization: {
      //抽离公用模块
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true,
          },
        },
      },
    },
  },
  babel: {   //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  },
  devServer: {
    open: false,
    before(app) {
      apiMocker(app, path.resolve('./mock/index.js'), {
        proxy: {}, // 需要设置代理的话
        changeHost: true,
      })
    }
  },
};
