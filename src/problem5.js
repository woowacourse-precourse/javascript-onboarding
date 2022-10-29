/*
[x] 돈을 단위로 나누었을 때 몫과 나머지를 반환하는 기능을 구현한다.
[x] 큰 단위부터 돈을 나누고 결과를 반환한다.
*/

class MoneyChanger {
  MONEY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  change(money) {
    return this.MONEY_UNITS.map((moneyUnit) => {
      const [quotient, remainder] = this._divideMoney(money, moneyUnit);
      money = remainder;
      return quotient;
    });
  }

  _divideMoney(money, unit) {
    return [Math.floor(money / unit), money % unit];
  }
}

function problem5(money) {
  const moneyChanger = new MoneyChanger();
  return moneyChanger.change(money);
}

module.exports = problem5;
