function problem2(cryptogram) {
  var answer;

  while (true) {
    let breakCondition = true;
    let tempCryptogram = "";
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        breakCondition = false;
        i++;
      } else tempCryptogram += cryptogram[i];
    }
    cryptogram = tempCryptogram;
    if (breakCondition) break;
  }

  answer = cryptogram;
  return answer;
}

module.exports = problem2;
