function problem5(money) {
  const answer = countCurrency(money);
  return answer;
}
const countCurrency = (money) => {
  const currencyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return currencyList.reduce((currencyCount, currency) => {
    const count = Math.floor(money / currency);
    currencyCount.push(count);
    money %= currency;
    return currencyCount;
  }, []);
};

module.exports = problem5;
