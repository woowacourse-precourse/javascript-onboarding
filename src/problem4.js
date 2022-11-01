function problem4(word) {
  var answer = '';
  for (var i = 0; i < word.length; i++) {
    var str = word.charCodeAt(i);

    if (66 < str && str < 91)
      answer = answer + String.fromCharCode(90 - str + 65);
    else if (96 < str && str < 123)
      answer = answer + String.fromCharCode(122 - str + 97);
    else if (str == 32) answer = answer + String.fromCharCode(32);
  }
  return answer;
}

module.exports = problem4;
