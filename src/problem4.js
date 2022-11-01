function problem4(word) {
  var arr_word = word.toString();
  var answer = "";
  /* 주어진 단어(word)에 대하여 순회하며 */
  for (var i = 0; i < arr_word.length; i++) {
    if (arr_word.charCodeAt(i) >= 65 && arr_word.charCodeAt(i) <= 90) {
      /* ASCII 코드 값(A=65, Z=90) 고려하여 가우스 법칙과 같은 방식을 적용하여 반대값 구하기 */
      answer = answer.concat(String.fromCharCode(155 - arr_word.charCodeAt(i)));
    } else if (arr_word.charCodeAt(i) >= 97 && arr_word.charCodeAt(i) <= 122) {
      /* ASCII 코드 값(a=97, Z=122) 고려하여 가우스 법칙과 같은 방식을 적용하여 반대값 구하기 */
      answer = answer.concat(String.fromCharCode(219 - arr_word.charCodeAt(i)));
    } else answer = answer.concat(arr_word[i]);
  }
  return answer;
}

module.exports = problem4;
