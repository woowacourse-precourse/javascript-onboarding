function moneyCalculator(amount, sumMoney) {
  const cnt = Math.floor(sumMoney / amount);

  return cnt;
}

function problem5(money) {
  let answer = Array.from({ length: 9 }, () => 0);
  let sumMoney = money;

  const amount = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < amount.length; i++) {
    const cnt = moneyCalculator(amount[i], sumMoney);
    sumMoney %= amount[i];
    answer[i] = cnt;
  }

  return answer;
}

module.exports = problem5;
