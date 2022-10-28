function problem5(money) {
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = [];

  cash.forEach(item => {
    if (money / item >= 1) {
      wallet.push(Math.floor(money / item));
      money = money % item;
    } else if (money / item < 1) {
      wallet.push(0);
    }
  });

  return wallet;
}

module.exports = problem5;
