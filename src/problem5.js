function problem5(money) {
  var answer = [];
  const costStandard = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const countBillsAndCoins = function (cost) {
    answer.push(Math.floor(money / cost));
    money = money % cost;
  };

  for (let i = 0; costStandard.length > i; i++) {
    countBillsAndCoins(costStandard[i]);
  }

  return answer;
}

module.exports = problem5;
