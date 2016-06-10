var BowerWebpackPlugin = require("bower-webpack-plugin");
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-1']
      }
    }]
  },
  plugins: [
      new BowerWebpackPlugin({
			modulesDirectories: ['bower_components'],
			manifestFiles: ['bower.json', '.bower.json'],
			includes: /.*/,
			excludes: /.*\.less$/
		})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
