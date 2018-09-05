module.exports = {
	test: /\.ejs$/,
	use: {
		loader: 'ejs-loader?variable=data',
		query: {
			interpolate : /\{\{(.+?)\}\}/g,
			evaluate    : /\[\[(.+?)\]\]/g
		}
	}
}