function problem5(money) {
  const CURRENCIES = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const result = [];
  let currentMoney = money;
  for (let currency of CURRENCIES) {
    result.push(Math.trunc(currentMoney / currency));

    currentMoney %= currency;
  }

  return result;
}

module.exports = problem5;
