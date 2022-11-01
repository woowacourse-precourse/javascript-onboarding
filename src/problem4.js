function problem4(word) {
  var answer = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] >= 'A' && word[i] <= 'Z') {
      answer += String.fromCharCode(155 - word[i].codePointAt(0));
    }
  }
  return answer;
}

module.exports = problem4;
