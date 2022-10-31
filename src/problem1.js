// 예외를 처리하는 함수 구현
// 사람별로 최대 점수를 구할수 있는 함수 구현
// 승부결과를 판단하는 함수 구현
// 구현된 함수를 사용하여 problem1 함수 구현

function checkException(pages) {
  const [left, right] = pages;
  if (
    left >= 1 &&
    left <= 399 &&
    right >= 2 &&
    right <= 400 &&
    left % 2 === 1 &&
    right % 2 === 0 &&
    right - left === 1
  ) {
    return false;
  }
  return true;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
