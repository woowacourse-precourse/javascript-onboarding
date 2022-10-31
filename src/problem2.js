function problem2(cryptogram) {

  let answer = "";

  while (true) {
    for (i=0; i<cryptogram.length; i++) {
      if (cryptogram[i] !== cryptogram[i+1] && cryptogram[i] != cryptogram[i-1]) {
          answer += cryptogram[i];
      }
    }
    if (cryptogram === answer) {
      break;
    }

    cryptogram = answer;
    answer = ""
  }
  return answer;
}

module.exports = problem2;
