const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  return MONETARY_UNIT.map((m) => {
    let count = Math.trunc(money / m);
    money = money % m;
    return count;
  });
}

module.exports = problem5;
