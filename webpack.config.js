const { resolve } = require('path');

const config = {
	mode: 'production',
	entry: resolve(__dirname, './src/index.ts'),
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'hello.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts']
	},
	externals: {
		vue: 'vue'
	},
	devtool: 'source-map'
};

module.exports = config;
