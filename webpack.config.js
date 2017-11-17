module.exports = {
  entry: './front/src/index.jsx',
  output: {
    path: __dirname + '/front/public',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }, {
        test: /\.woff|.woff2|.ttf|.eot|.jpeg|.yml|.jpg|.json|.png|.svg*.*$/,
        loader: 'file-loader'
      }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
