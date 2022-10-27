function problem5(money) {
  const wallet = [];
  const coinList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < coinList.length; i++) {
    wallet.push(Math.trunc(money / coinList[i]));
    money = money - coinList[i] * wallet[i];
  }
  return wallet;
}

module.exports = problem5;
