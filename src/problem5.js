const MONEY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const answer = MONEY_UNITS.map(() => 0);
  let currentMoney = money;
  let index = 0;

  while (currentMoney > 0) {
    const count = parseInt(currentMoney / MONEY_UNITS[index]);

    answer[index] = count;
    currentMoney %= MONEY_UNITS[index];
    index += 1;
  }

  return answer;
}

module.exports = problem5;
