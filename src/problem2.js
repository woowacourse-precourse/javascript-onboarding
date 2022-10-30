function problem2(cryptogram) {
  var answer;
  while (true) {
    let tf = true;
    let tmp = "";
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        tf = false;
        i++;
      } else tmp += cryptogram[i];
    }
    cryptogram = tmp;
    if (tf) break;
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
