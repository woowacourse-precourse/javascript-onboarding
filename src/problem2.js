function problem2(cryptogram) {
  var answer;
  let len = cryptogram.length
  while (true) {
    for (let i = 0; i < len - 1; i++) {
      if (cryptogram[i] === cryptogram[i+1]) {
        word1 = cryptogram.slice(0, i);
        word2 = cryptogram.slice(i+2, len);
        newCrypto = word1 + word2;
      }
    }
    if (newCrypto === cryptogram) {
      break;
    } else {
      cryptogram = newCrypto;
      len = cryptogram.length
    }
  }

  answer = cryptogram

  return answer;
}

module.exports = problem2;