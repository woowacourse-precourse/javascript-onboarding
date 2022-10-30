function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  let temp = money;
  for (let i in units) {
    const unit = units[i];
    result[i] = Math.floor(temp / unit);
    temp %= unit;
  }

  return result;
}

module.exports = problem5;
