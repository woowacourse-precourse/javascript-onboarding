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

function countMoney(money, value) {
  let ret = parseInt(money / value);

  return ret;
}

function getResult(money) {
  let moneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let afterCount = money;

  for (let index = 0; index < moneyArray.length; index++) {
    money = afterCount;
    if (parseInt(money / moneyArray[index]) > 0) {
      afterCount = money % moneyArray[index];
      moneyArray[index] = countMoney(money, moneyArray[index]);
      continue;
    }
    moneyArray[index] = 0;
  }
  return moneyArray;
}

function problem5(money) {
  if (validInputCheck(money) < 0) {
    return "Argument Error";
  }
  var answer = getResult(money);
  return answer;
}

module.exports = problem5;
