module.exports =  {
  options: {
    banner: '/*! <%= package.version %> */\n',
    separator: ';'
  },
  maps: {
    src: ['js/src/voice-search.js'],
    dest: 'js/build/voice-search.js'
  }
};