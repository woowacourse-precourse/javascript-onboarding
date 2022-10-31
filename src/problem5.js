function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let remainMoney = money;

  moneyUnit.forEach((_, index) => {
    answer[index] += change(remainMoney, moneyUnit[index]);
    remainMoney = remainMoney % moneyUnit[index];
  });

  return answer;
}

function change(money, amount) {
  return Math.floor(money / amount);
}

module.exports = problem5;
