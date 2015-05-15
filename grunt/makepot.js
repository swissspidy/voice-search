module.exports = {
	dist: {
		options: {
			cwd            : '',
			domainPath     : '/languages',
			exclude        : ['release/.*'],
			include        : [],
			mainFile       : 'voice-search.php',
			potComments    : '',
			potFilename    : 'voice-search.pot',
			potHeaders     : {
				poedit                 : true,
				'x-poedit-keywordslist': true,
				'report-msgid-bugs-to' : 'https://pascalbirchler.com',
				'last-translator'      : 'Pascal Birchler',
				'language-team'        : 'Pascal Birchler <support@spinpress.com>',
				'x-poedit-country'     : 'Switzerland'
			},
			processPot     : null,
			type           : 'wp-plugin',
			updateTimestamp: false
		}
	}
}
