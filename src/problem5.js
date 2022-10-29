function problem5(money) {
  let moneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < answer.length; i++) {
    if (money) {
      answer[i] = parseInt(money / moneyArray[i]);
      money = money % moneyArray[i];
    }
  }

  return;
}

module.exports = problem5;
