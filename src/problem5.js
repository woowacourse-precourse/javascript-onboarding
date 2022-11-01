function problem5(money) {
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = [];

  cash.forEach(item => {
    wallet.push(Math.floor(money / item));
    money = money % item;
  });

  return wallet;
}

module.exports = problem5;
