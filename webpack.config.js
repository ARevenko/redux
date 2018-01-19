const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, './dist')

const webpackConfig = {
	entry: "./app/index.jsx",
	output:{
		path: path.resolve(__dirname, './app/public'),
		publicPath: '/public/',
		filename: "bundle.js"  
	},
	module: {
		rules: [
			{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				exclude: [/node_modules/, /public/],
				options:{
					presets:["env", "react"]
				}
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings 
				}, {
					loader: "css-loader" // translates CSS into CommonJS 
				}, {
					loader: "less-loader" // compiles Less to CSS 
				}]
			}
		]
	}
}

module.exports = webpackConfig