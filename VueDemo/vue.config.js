module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  chainWebpack: config => {
    // url Loader
    config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('file-loader')
          .loader('file-loader')
          .end()
  },
  devServer: {
    proxy: 'http://localhost:2233'
  }

}