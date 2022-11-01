function problem5(money) {
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return moneyArr.map((unit) => {
    const ret = Math.floor(money / unit);
    money %= unit;
    return ret;
  });
}

module.exports = problem5;
