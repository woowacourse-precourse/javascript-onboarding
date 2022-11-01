function problem5(money) {
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; money !== 0; i++) {
    const count = money / arr[i] >= 1 ? Math.floor(money / arr[i]) : 0;
    result[i] = count;

    money = count > 0 ? (money -= arr[i] * count) : money;
  }

  return result;
}

module.exports = problem5;
