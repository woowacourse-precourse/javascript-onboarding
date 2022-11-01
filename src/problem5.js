function getMoney(money) {
  let res = [];
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < won.length; i++) {
    res[i] = Math.floor(money / won[i]);
    money %= won[i];
  }
  return res;
}

function problem5(money) {
  return getMoney(money);
}

module.exports = problem5;
