function problem5(money) {
  let answer = [];
  let moneySize = 50000;

  for (i = 0; i < 9; i++) {
    answer[i] = parseInt(money / moneySize);
    money = money % moneySize;

    if (i % 2 === 0) moneySize = moneySize / 5;
    else if (i === 7) moneySize = moneySize / 10;
    else moneySize = moneySize / 2;
  }
  return answer;
}

module.exports = problem5;
