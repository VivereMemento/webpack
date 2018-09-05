module.exports = {
	test: /\.(png|jpg|gif)$/i,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 8192,
				name: '[name].[ext]',
				outputPath: 'img/'
			}
		}
	]
}