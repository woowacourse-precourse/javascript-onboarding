// 마지막에 삭제된 값이 있으면 연속된 중복을 체크하여 삭제하는 함수 구현
// 현재값과 스택의 최상단값을 비교하여 중복을 제거하는 함수 구현
// 구현된 함수를 사용하여 problem2 함수 구현

function checkLastDeleted(latestDeleted, currentValue) {
  if (latestDeleted !== null) {
    if (currentValue === latestDeleted) {
      return true;
    }
  }
  return false;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
