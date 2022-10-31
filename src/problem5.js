function problem5(money) {
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = cash.map(c => {
    const quo = parseInt(money / c);
    money = money % c;
    return quo
  })
  return result;
}

module.exports = problem5;
