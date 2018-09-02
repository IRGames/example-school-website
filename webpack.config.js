const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
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
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
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
			template: 'client/index.html',
		}),
		new HardSourceWebpackPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				PASSWORD: JSON.stringify(process.env.PASSWORD),
				BUTTS:  JSON.stringify(process.env.BUTTS)
			}
		})
	],
	devtool: 'inline-source-map'
};
