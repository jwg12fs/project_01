const HtmlWebpackPlugin = require('html-webpack-plugin'),
	  path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports = {
	mode: 'development',
	entry: {
		index: path.resolve(__dirname, './src/js/index.js')
	},
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules'),
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [

					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function(){
								return [autoprefixer('last 5 versions')]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.tpl$/,
				loader: 'ejs-loader'
			}
			// {
			// 	test: /\.(png|jpg|jpeg|gif|ico)$/i,
			// 	loader: [
			// 		'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
			// 		'image-webpack-loader'
			// 	]
			// }
		]
	},
	plugins: [
		new uglify(),
		new HtmlWebpackPlugin({
			minify: {
				removeComments: true,
				collapseWhitespace: true
			},
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),
			title: 'Calculator',
			chunksSortMode: 'manual',
			chunks: ['index'],
			excludeChunks: ['node_modules'],
			hash: true
		})
	],
	devServer:{
		// watchOptions: {
		// 	ignored: /node_modules/
		// },
		open: true,
		host: 'localhost',
		port: 3300
	}
}