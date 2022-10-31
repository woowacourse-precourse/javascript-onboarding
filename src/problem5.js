const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  return moneyUnit.map((unit) => {
    const count = parseInt(money / unit);
    money -= count * unit;
    return count;
  });
}

module.exports = problem5;
