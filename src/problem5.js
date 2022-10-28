/*
[x] 돈을 단위로 나누었을 때 몫과 나머지를 반환하는 기능을 구현한다.
[x] 큰 단위부터 돈을 나누고 결과를 반환한다.
*/

function divideMoney(money, unit) {
  return [Math.floor(money / unit), money % unit];
}

function problem5(money) {
  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return moneyUnits.map((moneyUnit) => {
    const [quotient, remainder] = divideMoney(money, moneyUnit);
    money = remainder;
    return quotient;
  });
}

module.exports = problem5;
