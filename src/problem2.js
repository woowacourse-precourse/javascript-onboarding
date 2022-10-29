function problem2(cryptogram) {
  var answer;
  var cryptoPop;
  var cryptoArray = cryptogram.split('');
  var answerArray = [];

  while (cryptoPop = cryptoArray.pop()) {
    if (cryptoPop == answerArray[answerArray.length - 1]) {
      answerArray.pop();
    } else {
      answerArray.push(cryptoPop);
    }
  }
  return answer;
}

module.exports = problem2;
