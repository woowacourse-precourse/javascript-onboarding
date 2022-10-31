function problem5(money) {
  let moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(moneyType.length).fill(0);
  for (let i = 0; i < moneyType.length; i++){
    answer[i] += Math.floor(money / moneyType[i]);
    money = money % moneyType[i];
  }
  return answer;
}

module.exports = problem5;