// 소문자, 대문자, 그외 문자를 판별하는 함수 구현
// 문자를 변환하는 함수 구현
// 구현된 함수를 사용하여 problem4 함수 구현

function checkChar(char) {
  const asciCode = char.charCodeAt();
  if (asciCode >= 65 && asciCode <= 90) {
    return 1;
  } else if (asciCode >= 97 && asciCode <= 122) {
    return 2;
  } else {
    return 0;
  }
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
