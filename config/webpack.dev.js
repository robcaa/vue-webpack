'use strict'

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
	mode: 'development',

	entry: [
		'./src/app.js'
	],

	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
		  'pages': path.join(__dirname, '..', 'src/pages'),
		  'components': path.join(__dirname, '..', 'src/components')
		}
	},

	devServer: {
		hot: true,
		watchOptions: {
			poll: true
		}
	},

	module: {
		rules: [
			{
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'assets/webfonts/',
						name: '[name][hash].[ext]',
                    },
				}, ],
			},
			{
				test: /\.css$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it uses publicPath in webpackOptions.output
							publicPath: '../',
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'vue-style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.s[a|c]ss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new CopyWebpackPlugin([{
			from: 'src/assets',
			to: 'assets',
			ignore: ['*.scss', '*.ttf', '*.otf', '*.eot', '*.svg', '*.woff', '*.woff2']
		}]),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				]
			}
		}),
	]
}