function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];
  currency.forEach((v) => {
    answer.push(Math.floor(money / v));
    money %= v;
  });
}

module.exports = problem5;
