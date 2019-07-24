module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/public/dist/': '/',
  outputDir : 'dist',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    proxy: 'http://localhost:7777'
  }




}
