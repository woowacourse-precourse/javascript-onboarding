function problem5(money) {
  let answer = [];
  let moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let calc of moneyList) {
    let cut = parseInt(money / calc);
    let rest = money % calc;
    answer.push(cut);
    money = rest;
  }
  return answer;
}
module.exports = problem5;
