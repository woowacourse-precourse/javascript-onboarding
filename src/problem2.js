function problem2(cryptogram) {
  var answer;

  var flag = true;

  while (flag) {
    flag = false;
    for (var i = 0; i < cryptogram.length - 1; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        cryptogram = cryptogram.replace(cryptogram[i] + cryptogram[i + 1], "");
        flag = true;
        break;
      }
    }
  }

  answer = cryptogram;
  return answer;
}

module.exports = problem2;
