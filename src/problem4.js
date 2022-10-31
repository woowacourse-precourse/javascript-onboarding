function problem4(word) {
  var answer;

  return answer;
}

function violationChk(word) {
  // 문자열 길이가 1~1000자 사이인지 검사
  var lengthChk = word.length > 0 && word.length <= 1000;

  var isAlphabet = false;
  // 문자열 길이 만큼 하나씩 검사
  for (var i = 0; i < word.length; i++) {
    // 문자가 알파벳일 경우
    if (
      (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) ||
      (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122)
    ) {
      isAlphabet = true;
      //문자가 알파벳이 아닐 경우
    } else {
      isAlphabet = false;
      break;
    }
  }

  return lengthChk && isAlphabet;
}

module.exports = problem4;
