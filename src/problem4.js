function problem4(word) {
  newWord = word.split("");

  answer = [];
  newWord.forEach(function (changeWord) {
    //a+z 등 변환해야 하는 문자열의 아스키코드값 합은 대문자 155,소문자 219
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
