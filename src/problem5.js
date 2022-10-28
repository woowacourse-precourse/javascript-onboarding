function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  currency.forEach((v) => {
    money / v;
    money %= v;
  });
}

module.exports = problem5;
