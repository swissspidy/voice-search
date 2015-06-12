module.exports = {
	options: {
		browser: true,
		curly  : true,
		eqeqeq : true,
		immed  : true,
		latedef: true,
		newcap : true,
		noarg  : true,
		sub    : true,
		undef  : true,
		boss   : true,
		eqnull : true,
		globals: {
			exports                : true,
			module                 : false,
			webkitSpeechRecognition: true,
			voice_search           : true
		}
	},
	all    : [
		'js/src/**/*.js',
		'js/test/**/*.js'
	]
}
