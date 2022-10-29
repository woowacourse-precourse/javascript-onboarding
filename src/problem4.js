function problem4(word) {
  var answer;
  return answer;
}

function reverseLower(letter) {
  // 영어 소문자 ASCII : 97 ~ 122
  const index = 97 - letter.charCodeAt();
  return String.fromCharCode(122 + index);
}

function reverseUpper(letter) {
  // 영어 대문자 ASCII 65 ~ 90
  const index = 65 - letter.charCodeAt();
  return String.fromCharCode(90 + index);
}

module.exports = problem4;
