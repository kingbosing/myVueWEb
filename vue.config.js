
module.exports = {
  
  devServer:{
    port:8081
  },
  configureWebpack: {
    performance: {
      hints: false, 
      maxAssetSize: 30000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
      assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
    }
  },
  outputDir: 'dist',
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: true,
  parallel: true,
  css: undefined
}
