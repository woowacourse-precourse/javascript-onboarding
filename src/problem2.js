function problem2(cryptogram) {
  var answer = "";
  for (let i=0; i<cryptogram.length; i++) {
    if (cryptogram.indexOf(cryptogram[i])===1) answer += cryptogram [i];
  }
  return answer;
}

module.exports = problem2;
