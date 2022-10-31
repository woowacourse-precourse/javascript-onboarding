function problem5(money) {
  const coinBox = new Array(9).fill(0);
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  function coinChanger(total, unit, coinBoxIndex) {
    if (total >= unit) {
      const needCoin = Number.parseInt(total / unit);
      coinBox[coinBoxIndex] += needCoin;
      total = total - unit * needCoin;
    }
    return total;
  }

  for (let i = 0; i < coinBox.length; i++) {
    money = coinChanger(money, units[i], i);
  }
  return coinBox;
}

module.exports = problem5;
