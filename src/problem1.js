function problem1(pobi, crong) {
  var answer;
  return answer;
}

/**
 * 기능 정리
 * 1. 페이지 번호의 각 자리 숫자를 모두 더하는 함수
 * 2. 페이지 번호의 각 자리 숫자를 모두 더하는 함수
 * 3. 어떤 숫자가 더 큰지 비교하는 함수
 */

function addDigits(str) {
  if (isNaN(str)) throw new Error("숫자가 아닙니다.");

  const digits = str.split("");
  return digits.reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur, 10), 0);
}
function multiplyDigits(str) {
  const digits = str.split("");
  return digits.reduce((acc, cur) => parseInt(acc, 10) * parseInt(cur, 10), 1);
}

module.exports = problem1;
