const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:['react']
          }
      },
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				include: [
					path.join(__dirname, 'images'),
					path.join(__dirname, 'client/src/assets')
				],
				loader: 'url-loader?limit=30000&name=images/[name].[ext]'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
  watch: true,
	plugins: [
		new HtmlWebpackPlugin({
			template: 'client/index.html'
		})
	]
};
