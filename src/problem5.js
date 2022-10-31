function problem5(money) {
  const CURRENCIES = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = Array.from({ length: 9 }, () => 0);

  for (let i = 0; i < CURRENCIES.length; i++) {
    result[i] = Math.floor(money / CURRENCIES[i]);
    money = money % CURRENCIES[i];
    if (money === 0) break;
  }
  return result;
}

module.exports = problem5;
