function problem4(word) {
  var answer = "";

  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      answer += word[i];
    } else {
      var ascii = word.charCodeAt(i);
      // 소문자
      if (97 <= ascii && ascii <= 122) {
        answer += String.fromCharCode(122 - (word.charCodeAt(i) - 97));
      }
      // 대문자
      else {
        answer += String.fromCharCode(90 - (word.charCodeAt(i) - 65));
      }
    }
  }
  return answer;
}

module.exports = problem4;
