const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = isDev => ({
	test: /\.(sa|sc|c)ss$/,
	use: [
		isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				sourceMap: true,
				// modules: true,
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: (loader) => [
					require('autoprefixer')()
				]
			}
		},
		'sass-loader'
	]
});