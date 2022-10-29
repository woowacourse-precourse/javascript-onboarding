/*
기능 구현 목록
- [v] 돈을 큰 금액의 화폐 순으로 나누는 기능
- [v] 화폐 별로 나눈 개수를 세는 기능 
*/

function problem5(money) {
  return divideMoney(money);
}

function divideMoney(money) {
  const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = [];
  let _money = money;

  for (let i = 0; i < MONETARY_UNIT.length; i++) {
    wallet.push(countMoney(_money, MONETARY_UNIT[i]));
    _money %= MONETARY_UNIT[i];
  }

  return wallet;
}

function countMoney(money, currentMonetaryUnit) {
  return Math.floor(money / currentMonetaryUnit);
}

module.exports = problem5;
