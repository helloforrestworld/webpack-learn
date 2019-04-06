const path = require('path')

module.exports = {
  // entry: './src/index.js',
  // mode: 'production' 默认值
  mode: 'development',
  entry: {
    main : './src/index.js'
  },
  module: {
    rules: [{
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // placeholder
            name: '[name].[ext]'
          }
        }
    }]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}