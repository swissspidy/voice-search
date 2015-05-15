module.exports = {
	all: {
		files  : {
			'js/voice-search.min.js': ['js/voice-search.js']
		},
		options: {
			banner   : '/*! <%= package.title %> - v<%= package.version %>\n' +
			' * <%= package.homepage %>\n' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
			' * Licensed GPLv2+' +
			' */\n',
			sourceMap: true,
			mangle   : {
				except: ['jQuery']
			}
		}
	}
}
