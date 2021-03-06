const path = require("path");
const example = process.env.EXAMPLE_ENV;
module.exports = {
  publicPath: example === "true" ? "/zeroview/" : "/",
  runtimeCompiler: true, // 使用包含运行时+编译器的vue构建版本,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/style.scss")]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        return Object.assign({}, options, {
          compilerOptions: {
            preserveWhitespace: false
          }
        });
      })
      .end();

    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use(require.resolve("./md-loader.js"))
      .loader(require.resolve("./md-loader.js"))
      .end();
  }
};
