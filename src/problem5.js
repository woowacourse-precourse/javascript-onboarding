function problem5(money) {
  const answer = countCurrency(money);
  return answer;
}
const countCurrency = (money) => {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let currencyCount = [];
  while (money) {
    currency.forEach((item) => {
      let count = 0;
      count += Math.floor(money / item);
      money %= item;
      currencyCount.push(count);
    });
  }
  return currencyCount;
};

module.exports = problem5;
