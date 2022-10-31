function problem5(money) {
  let answer = [];
  let remainedMoney = money;
  let units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  units.forEach((unit) => {
    answer.push(Math.floor(remainedMoney / unit));
    remainedMoney %= unit;
  });

  return answer;
}

module.exports = problem5;
