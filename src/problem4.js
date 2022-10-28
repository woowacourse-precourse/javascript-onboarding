// 0. 문자열 길이 검사
// 1. 문자를 조건에 맞게 변환하는 함수 구현
// 2. 변환 후 반환

function validInputCheck(word) {
  if (word.length < 1 || word.length > 1000) {
    return -1;
  }
  return 0;
}

function problem4(word) {
  if (validInputCheck(word) < 0) {
    return "Argument Error";
  }
  var answer;
  return answer;
}

module.exports = problem4;
