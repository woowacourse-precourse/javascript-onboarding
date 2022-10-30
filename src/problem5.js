function problem5(money) {
  const moneyunits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  for (let i = 0; i < moneyunits.length; i++) {
    const currUnit = moneyunits[i];
    const needMoney = Number.parseInt(money / currUnit);

    result.push(needMoney);
    money -= currUnit * needMoney;
  }

  return result;
}

module.exports = problem5;
