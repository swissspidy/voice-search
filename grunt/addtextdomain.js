module.exports = {
  dist: {
    options: {
      textdomain   : 'voice-search',
      updateDomains: []
    },
    target : {
      files: {
        src: ['*.php', '**/*.php', '!node_modules/**', '!tests/**']
      }
    }
  }
};