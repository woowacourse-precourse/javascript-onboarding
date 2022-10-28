function problem5(money) {
  const answer = countCurrency(money);
  return answer;
}
const countCurrency = (money) => {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const currencyCount = [];
  currency.forEach((item) => {
    const count = Math.floor(money / item);
    currencyCount.push(count);
    money %= item;
  });
  return currencyCount;
};

module.exports = problem5;
