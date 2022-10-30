function problem4(word) {
  var answer = "";

  for (var i = 0; i < word.length; i++) {
    var asciiCodeNum = word.charCodeAt(i);
    var changeAlphabet = word.charAt(i);

    if (asciiCodeNum >= 65 && asciiCodeNum <= 90) {
      // 대문자인 경우
      changeAlphabet = String.fromCharCode(155 - asciiCodeNum);
    } else if (asciiCodeNum >= 97 && asciiCodeNum <= 122) {
      // 소문자인 경우
      changeAlphabet = String.fromCharCode(219 - asciiCodeNum);
    }

    answer += changeAlphabet;
  }

  return answer;
}

module.exports = problem4;
