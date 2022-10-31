/*
 * <기능 목록>
 * 1. 화폐 단위와 금액을 입력받고, 변환되는 갯수와 남은 액수를 반환하는 calMoneyChange() 함수.
 * 2. 주어진 금액을 큰 화폐 단위 순서대로 변환하여 배열에 담아 반환하는 changeMoney() 함수.
 *     이 때, 배열은 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 순서로 변환되는 화폐 갯수를 포함한다.
 */

function problem5(money) {
  var answer;
  return answer;
}

function calMoneyChange(moneyUnit, money) {
  const moneyCount = Math.floor(money / moneyUnit);
  const moneyLeft = money % moneyUnit;

  return [moneyCount, moneyLeft];
}

module.exports = problem5;
