module.exports = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
					['@babel/preset-env', {
					useBuiltIns: 'entry',
					targets: {
						Chrome: 67,
						IE: 11,
						'browsers': ['last 2 versions', 'safari 7']
					},
				}]
			],
			plugins: [
				require('@babel/plugin-proposal-object-rest-spread'),
				require('@babel/plugin-syntax-dynamic-import'),
				[require('@babel/plugin-proposal-decorators'), { 'legacy': true }],
				[require('@babel/plugin-proposal-class-properties'), { 'loose': false }],
			]
		}
	}
}