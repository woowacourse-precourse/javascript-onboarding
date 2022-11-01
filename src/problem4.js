function problem4(word) {
  var answer;
  newWord = word.split("");
  answer = [];
  newWord.forEach(function (changeWord) {
    ascii = changeWord.charCodeAt(0);
    if (ascii <= 90 && ascii >= 65) {
      answer += String.fromCharCode(155 - ascii); //대문자일때 문자열 변환
    } else if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(219 - ascii); //소문자일때 문자열 변환
    } else {
      answer += changeWord;
    }
  });
  return answer;
}

module.exports = problem4;
