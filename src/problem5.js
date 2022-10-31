function problem5(money) {
  const paperMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return paperMoney.map((el => {
    const divideValue = Math.floor(money / el);
    money %= el;
    return divideValue;
  }));
}

module.exports = problem5;
