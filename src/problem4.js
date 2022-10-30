function problem4(word) {
  var answer = '';
  for (var i = 0; i < word.length; i++) {
    var num = word.charCodeAt(i);

    if (65 <= num && num <= 90)
      //대문자
      answer = answer + String.fromCharCode(90 - num + 65);
    else if (97 <= num && num <= 122)
      //소문자
      answer = answer + String.fromCharCode(122 - num + 97);
    else if (num == 32) answer = answer + String.fromCharCode(32);
  }
  return answer;
}

module.exports = problem4;
