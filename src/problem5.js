function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const extraMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < extraMoney.length; i++) {
    if (parseInt(money / extraMoney[i]) !== 0) {
      answer[i] = parseInt(money / extraMoney[i]);
      money = money % extraMoney[i];
    }
  }

  return answer;
}

module.exports = problem5;
