function problem4(word) {
  var answer = "";

  //청개구리사전은 A-Z, B-Y와 같이 첫값,끝값 쌍을 가진다.
  //따라서 첫값과 끝값의 합에서 첫값이 나온다면 -끝값, 끝값이 나온다면 -첫값을 계산한다.
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() == 32) {
      answer += word[i];
    } else if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      answer += String.fromCharCode(155 - word[i].charCodeAt());
    } else if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
      answer += String.fromCharCode(219 - word[i].charCodeAt());
    }
  }
  return answer;
}

module.exports = problem4;
