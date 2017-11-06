const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'assets/js/bundle.js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new cleanWebpackPlugin(['dist'])
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader'
				}],
				exclude: [path.resolve(__dirname, 'node_modules')]
			},
			{
				test: /\.css$/,
				use: ['style-loader',{
					loader: 'css-loader',
					options: {
						module: true,
						localIdentName: '[name]-[local]_[hash:base64:6]'
					}
				}],
				exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				include: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},
			{
				test: /\.scss$/,
				use: ['style-loader',{
					loader: 'css-loader',
					options: {
						module: true,
						localIdentName: '[name]-[local]_[hash:base64:6]'
					}
				},'sass-loader'],
				exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader','sass-loader'],
				include: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'src/common')
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'assets/img/[name][hash:8].[ext]'
					}
				}
			},{
				test: /\.(ttf|eot|woff|svg|woff2|oft)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'assets/fonts/[name][hash:8].[ext]'
					}
				}
			}
		]
	},
	devServer: {
		open: true,
		port: 8081,
		contentBase: './src/common',
		publicPath: '/'
	}
}