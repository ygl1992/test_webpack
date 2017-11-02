const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['react']
					}
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.png$/,
				use: ['file-loader']
			}
		]
	},
	devServer: {
		open: true,
		port: 8081
	}
}