const path = require('path')
module.exports = {
  runtimeCompiler: true, // 使用包含运行时+编译器的vue构建版本
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/style.scss'),
      ]
    }
  }
}
