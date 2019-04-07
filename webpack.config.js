const path = require('path')

module.exports = {
  // entry: './src/index.js',
  // mode: 'production' 默认值
  // context: The base directory, an absolute path, for resolving entry points and loaders from configuration.
  mode: 'development',
  entry: {
    main : './src/index.js'
  },
  module: {
    rules: [{
        test: /\.(png|jpg|gif)$/,
        use: {
          // loader: 'file-loader',
          loader: 'url-loader',
          options: {
            /**
             * @param  publicPath {String} @default context
             * @param  emitFile {Boolean} @default true
             * @param  useRelativePath {Boolean} @default false
             * @param  mimetype 为文件推断MIME type, 如果找不到文件的扩展名, 会查询mime tyoe
             * @param  fallback {String} @default 'file-loader'
             */
            name: '[name].[ext]', // placeholder [path][name][ext][hash][N]
            outputPath: 'images/',
            limit: 10240
          }
        }
    },{
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
    }]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}