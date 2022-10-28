function problem5(money) {
  let total = money;
  const CURRENCY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const amount = [];
  for (let bill of CURRENCY) {
    const currencyCount = Math.floor(total / bill);
    if (currencyCount >= 1) {
      amount.push(currencyCount);
      total -= bill * currencyCount;
    } else if (currencyCount < 1) {
      amount.push(0);
    }
  }
  return amount;
}

module.exports = problem5;
