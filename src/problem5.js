function problem5(money) {
  let divideMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let count = Array(divideMoney.length).fill(0);

  if (money === 0) return count;

  for (let i = 0; i < count.length; i++) {
    count[i] = Math.floor(money / divideMoney[i]);
    money = money - divideMoney[i] * count[i];
  }

  return count;
}

module.exports = problem5;
