function problem4(word) {
  const dict = {A: 'Z', B:'Y', C:'X', D:'W', E:'V', F: 'U', G:'T', H:'S', I:'R', J:'Q', K:'P', L:'O', M:'N', N:'M', O:'L', P:'K', Q:'J', R:'I', S:'H', T:'G', U:'F', V:'E', W:'D', X:'C', Y:'B', Z:'A'}

  for(const [key, value] of Object.entries(dict)){
    dict[key.toLowerCase()] = value.toLowerCase()
  }

  return word
            .split('')
            .map((element) => dict[element] ?? element)
            .join('')
}

module.exports = problem4;
