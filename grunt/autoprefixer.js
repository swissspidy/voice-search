module.exports = {
	dist: {
		options: {
			browsers: [
				'last 2 versions',
				'> 5%',
				'ie 9'
			]
		},
		expand : true,
		flatten: true,
		src    : 'css/voice-search.css',
		dest   : 'css/'
	}
}
