const MONEY_AMOUNTS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const amounts = MONEY_AMOUNTS;
  let currMoney = money;

  const counts = amounts.map((amount) => {
    const count = Math.floor(currMoney / amount);
    currMoney %= amount;

    return count;
  });

  return counts;
}

module.exports = problem5;
