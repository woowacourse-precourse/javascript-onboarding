function problem2(cryptogram) {
  var answer;
  var code = [];
  code.push(cryptogram[0]);

  for (var i = 1; i < cryptogram.length; i++) {
    const curr = cryptogram[i];
    const prev = code.length - 1;
  }
  return answer;
}

module.exports = problem2;
