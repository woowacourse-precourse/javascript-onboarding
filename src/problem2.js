function problem2(cryptogram) {
  var answer;
  while (true) {
    let tf = true;
    let tmp = "";
    let cryptogramArr = cryptogram.split("");
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogramArr[i] === cryptogramArr[i + 1]) {
        tf = false;
        i++;
      } else tmp += cryptogramArr[i];
    }
    cryptogram = tmp;
    if (tf) break;
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
