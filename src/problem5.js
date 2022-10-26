function problem5(money) {
  let answer = [];
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  if (String(money).length >= 1 && String(money).length <= 1000000) {
    for (let i = 0; i < moneyArr.length; i++) {
      answer.push(parseInt(money / moneyArr[i]));
      money = money - parseInt(money / moneyArr[i]) * moneyArr[i];
    }
  }

  return answer;
}
module.exports = problem5;
