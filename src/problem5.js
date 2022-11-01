function problem5(money) {
  const CURRENCY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const amount = [];
  CURRENCY.forEach(CURRENCY => {
    const USED_CURRENCY_COUNT = Math.floor(money / CURRENCY);
    amount.push(USED_CURRENCY_COUNT || 0);
    money -= CURRENCY * USED_CURRENCY_COUNT;
  });

  return amount;
}

module.exports = problem5;
