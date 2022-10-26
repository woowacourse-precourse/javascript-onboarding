function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = units.map((unit) => {
    const count = parseInt(money / unit);
    money %= unit;
    return count;
  });
  return result;
}

module.exports = problem5;
