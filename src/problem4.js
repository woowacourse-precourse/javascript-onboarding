function problem4(word) {
  var answer = "";
  for (i = 0; i < word.length; i++) {
    const ascii = word.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) {
      // 대문자
      answer += String.fromCharCode(90 - (ascii - 65));
    } else if (97 <= ascii && ascii <= 122) {
      // 소문자
      answer += String.fromCharCode(122 - (ascii - 97));
    } else {
      // 알파벳이 아닌 경우
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
