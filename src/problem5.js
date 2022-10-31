const MONEY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let currentMoney = money;
  const answer = MONEY_UNITS.map((unit) => {
    if (currentMoney === 0) {
      return 0;
    }

    const count = parseInt(currentMoney / unit);
    currentMoney %= unit;

    return count;
  });

  return answer;
}

module.exports = problem5;
