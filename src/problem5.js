function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return Array(9).fill(0).map((e, i) => {
    const n = Math.floor(money / unit[i]);
    money %= unit[i]
    return n;
  });
}

module.exports = problem5;
