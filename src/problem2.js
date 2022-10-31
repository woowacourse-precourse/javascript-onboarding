function problem2(cryptogram) {
  var answer;

  console.log('# this is problem 2')

  let pastCryptogram = ''
  let newCryptogram = ''
  pastCryptogram = cryptogram
  while ( cryptogram.length > 0 ) {
    for ( let i = 0; i < (cryptogram.length-1); i++ ) {
      if (cryptogram[i] === cryptogram[i+1]) {
        removeWord = cryptogram[i] + cryptogram[i+1]
        cryptogram = cryptogram.replace(removeWord, '')
        newCryptogram = cryptogram
        answer = cryptogram
      }
    }
    if ( pastCryptogram === newCryptogram ) {
      answer = cryptogram
      break
    } else {
      pastCryptogram = cryptogram
    }
  }

  answer = cryptogram
  return answer;
}

module.exports = problem2;
