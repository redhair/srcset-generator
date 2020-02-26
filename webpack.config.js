const path = require('path');

module.exports = {
  entry: './index.js',
  resolve: {
    extensions: ['.js', '.json', '.png', '.gif', '.jpg', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|gif|jpg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'srcset-generator'
  },
  devtool: 'source-map',
  optimization: {
    minimize: false
  }
};
