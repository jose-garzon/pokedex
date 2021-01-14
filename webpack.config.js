const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: '/src/index.ts',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js',
	},
	devServer: {
		open: true,
		port: 3000,
	},
	resolve: {
		extensions: ['.js', '.ts', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCSSExtractPlugin.loader },
					'css-loader',
					'sass-loader',
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html',
		}),
		new MiniCSSExtractPlugin({
			filename: 'css/main.css',
		}),
	],
};
