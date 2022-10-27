function problem5(money) {
  let total = money;
  const CURRENCY = [50000, 10000, 5000, 1000, 500, 100, 10, 1];
  const amount = [];
  for (let bill of CURRENCY) {
    const useBillCount = Math.floor(total / bill);
    if (useBillCount >= 1) {
      amount.push(useBillCount);
      total -= bill * useBillCount;
    } else if (useBillCount < 1) {
      amount.push(0);
    }
  }
  return amount;
}

module.exports = problem5;
