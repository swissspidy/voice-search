module.exports = {
  dist: {
    options: {
      cwd            : '',
      domainPath     : '/languages',
      exclude        : [],
      include        : [],
      mainFile       : '',
      potComments    : '',
      potFilename    : 'voice-search.pot',
      potHeaders     : {
        poedit                 : true,
        'x-poedit-keywordslist': true,
        'report-msgid-bugs-to' : 'https://pascalbirchler.com',
        'last-translator'      : 'Pascal Birchler',
        'language-team'        : 'SpinPress'
      },
      processPot     : null,
      type           : 'wp-plugin',
      updateTimestamp: true
    }
  }
};