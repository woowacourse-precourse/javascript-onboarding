function problem4(word) {
  var answer;
  return answer;
}

function reverseLower(letter) {
  // 영어 소문자 ASCII : 97 ~ 122
  const index = 97 - letter.charCodeAt();
  return String.fromCharCode(122 + index);
}

module.exports = problem4;
