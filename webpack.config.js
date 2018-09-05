const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel = require('./webpack/babel');
const ejs = require('./webpack/ejs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const css = require('./webpack/css');
const image = require('./webpack/image');

module.exports = env => ({
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
	module: {
		rules: [
			babel,
			ejs,
			css(env !== 'production'),
			image
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs'
		}),
		new MiniCssExtractPlugin({
      filename: env !== 'production' ? '[name].css' : './css/[name].[hash].css'
		}),
		new webpack.ProvidePlugin({
				_: "underscore"
		})
  ]
})