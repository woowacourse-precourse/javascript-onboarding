function problem2(cryptogram) {
  var answer = [];
  var s = cryptogram;
  for (var i = 0; i <= s.length; i++) {
    if (s[i] === answer[answer.length - 1]) {
      answer.pop();
    }else {
      answer.push(s[i]);
    }
  }answer = answer.join("");
  return answer;
}

module.exports = problem2;
