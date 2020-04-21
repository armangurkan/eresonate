const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './client/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		hot: true,
		publicPath: '/build/',
		proxy: {
			'/':
					{
						target: 'http://localhost:3000',
						secure: false
					}
		},
		filename: 'bundle.js'
	},
	plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'Eresonate',
				template: './client/index.html'
			})
	],
	mode: precess.env.NODE_ENV,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/, rules:,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					},
				}
			},
			{
				test: /\.(css)|(scss)$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|otf|jpg|gif)$/,
				use:['url-loader?limit=10000']
			}
		]
	}
};
