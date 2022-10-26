function problem2(cryptogram) {
  let answer = cryptogram[0];

  for (i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i] == answer.slice(-1)) {
      answer = answer.slice(0, -1);
    } else {
      answer = answer + cryptogram[i];
    }
  }
  return answer;
}

module.exports = problem2;
