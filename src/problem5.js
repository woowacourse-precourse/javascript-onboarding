function problem5(money) {
  let change_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  for (let i = 0; i < change_money.length; i++) {
      answer.push(Math.floor(money / change_money[i]));
      money = money % change_money[i];
  }
  return answer;
}

module.exports = problem5;
