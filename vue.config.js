const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8084,
    open: true,
    disableHostCheck: true
    // proxy: {
    //   "/psm": {
    //     target: "http://192.168.8.194:8023",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/psm/": ""
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  },
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "scss",
  //     patterns: [path.resolve(__dirname, "src/assets/scss/variables.scss")]
  //   }
  // }
};
