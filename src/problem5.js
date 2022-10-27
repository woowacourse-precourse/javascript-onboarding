function problem5(money) {
  return getCash(money);
}

const getCash = (money) => {
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return cash.map((currentCash) => {
    const result = Math.floor(money / currentCash);
    money = money % currentCash;
    return result;
  });
};

module.exports = problem5;
