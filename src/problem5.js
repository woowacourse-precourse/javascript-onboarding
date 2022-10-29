function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = new Array(unit.length).fill(0);

  for (let i = 0; i < unit.length; i++) {
    if (money / unit[i] >= 1) {
      result[i] = Math.floor(money / unit[i]);
      money -= result[i] * unit[i];
    }
  }

  return result;
}

module.exports = problem5;
