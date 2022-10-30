function problem4(word) {
  var answer = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] >= 'A' && word[i] <= 'Z') {
      answer += String.fromCharCode(155 - word[i].codePointAt(0));
    } else if (word[i] >= 'a' && word[i] <= 'z') {
      answer += String.fromCharCode(219 - word[i].codePointAt(0));
    } else if (word[i] == ' ') {
      answer += ' ';
    }
  }
  return answer;
}

module.exports = problem4;
