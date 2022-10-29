function problem2(cryptogram) {
  var answer = cryptogram;
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] == answer[i + 1]) {
      answer = answer.replace(answer[i] + answer[i], "");
      i = -1;
      continue;
    }
  }
  return answer;
}

module.exports = problem2;
