function problem5(money) {
  const cost = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const result = cost.map((c) => {
    const exchangeMoney = parseInt(money / c);
    money = money % c;
    return exchangeMoney;
  });

  return result;
}

module.exports = problem5;
