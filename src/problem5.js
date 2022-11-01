function problem5(money) {
  const WON = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  for (let i = 0; i < 9; i++) {
    result.push(parseInt(money / WON[i]));
    money = money % WON[i];
  }

  return result;
}

module.exports = problem5;
