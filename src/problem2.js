function problem2(cryptogram) {
  var regExp = /(.)\1+/;
  var continued = true;
  var answer = 0;

  while (continued) {
    cryptogram = cryptogram.replace(regExp, "");
    if (answer !== cryptogram) answer = cryptogram;
    else continued = false;
  }
  return answer;
}

module.exports = problem2;
