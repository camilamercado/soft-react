module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": "true" },
			query: {
				presets: ['react', 'es2015']
			}
		}]
	}
}