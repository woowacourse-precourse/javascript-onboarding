function moneyCalculator(amount, sumMoney) {
  const cnt = Math.floor(sumMoney / amount);

  return cnt;
}

function problem5(money) {
  let answer = Array.from({ length: 8 }, () => 0);
  let sumMoney = money;

  const map = new Map();
  map.set(50000, 0);
  map.set(10000, 1);
  map.set(5000, 2);
  map.set(1000, 3);
  map.set(500, 4);
  map.set(100, 5);
  map.set(50, 6);
  map.set(10, 7);
  map.set(1, 8);

  for (let x of map) {
    const cnt = moneyCalculator(x[0], sumMoney);
  }

  return answer;
}

module.exports = problem5;
