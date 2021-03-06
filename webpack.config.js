module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
      ,
      {
         test: /\.styl$/,
         loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};