/*
--기능 목록--
1. 주어진 money를 가장 적은 개수의 지폐와 동전으로 변환한다.

*/

function problem5(money) {
  return exchangeMoneyToLeastPaperAndCoin(money);
}

const exchangeMoneyToLeastPaperAndCoin = (money) => {
  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return moneyUnits.map((moneyUnit) => {
    const maxCountOfUnit = Math.floor(money / moneyUnit);
    money -= maxCountOfUnit * moneyUnit;
    return maxCountOfUnit;
  });
};

module.exports = problem5;
