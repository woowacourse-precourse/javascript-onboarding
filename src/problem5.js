// 0. 인자가 1이상 1000000이하의 수인지 확인
// 1. 숫자 크기와 화폐 단위와 비교 함수 추가
// 2. 단위에 맞게 반환값에 추가후 반환하는 함수 추가

function validInputCheck(money) {
  if (money.length < 1 || money.length > 1000000) {
    return -1;
  }
  if (!Number.isInteger(money)) {
    return -1;
  }
  return 0;
}

function problem5(money) {
  if (validInputCheck(money) < 0) {
    return "Argument Error";
  }
  var answer;
  return answer;
}

module.exports = problem5;
