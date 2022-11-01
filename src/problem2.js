function problem2(cryptogram) {
  let newCryptogram = '';

  for (let i = 0; i <= cryptogram.length; i++) {
    if (cryptogram[i] !== cryptogram[i+1] &&
      cryptogram[i] !== cryptogram[i-1]) {
        newCryptogram += cryptogram[i];
      }
  }

  if (cryptogram !== newCryptogram) {
    return problem2(newCryptogram);
  }

  var answer = newCryptogram;
  return answer;
}

module.exports = problem2;
