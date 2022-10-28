function problem4(word) {
  // word를 배열에 저장 후 순회
  // 문자 변환값들을 문자열로 반환
}

// 문자를 반대로 변환하는 기능
function convertReverse(letter) {
  const upperCaseStart = 65,
    upperCaseEnd = 90;
  const lowerCaseStart = 97,
    lowerCaseEnd = 122;

  // 문자 거꾸로 변환하는 연산
  const upperCaseReverse = upperCaseStart + upperCaseEnd - letter;
  const lowerCaseReverse = lowerCaseStart + lowerCaseEnd - letter;

  // 알파벳일 경우 소문자 확인 후 변환
  if (letter >= upperCaseStart && letter <= upperCaseEnd) {
    return String.fromCharCode(upperCaseReverse);
  }
  // 알파벳일 경우 대문자 확인 후 변환
  if (letter >= lowerCaseStart && letter <= lowerCaseEnd) {
    return String.fromCharCode(lowerCaseReverse);
  }
  // 알파벳이 아닌 경우
  return String.fromCharCode(letter);
}

module.exports = problem4;
