/*
--기능 목록--
1. 주어진 money를 가장 적은 개수의 지폐와 동전으로 변환한다.

*/

function problem5(money) {}

const getNumberOfEachMoneyUnits = (money, moneyUnits) => {
  return moneyUnits.map((moneyUnit) => {
    const maxCountOfUnit = Math.floor(money / moneyUnit);
    money -= maxCountOfUnit * moneyUnit;
    return maxCountOfUnit;
  });
};

module.exports = problem5;
