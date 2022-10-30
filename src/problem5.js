function problem5(money) {
  var answer;
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let count = 0;

  for (let i = 0; i < moneyArr.length; i++) {
    count = money % moneyArr[i];
    moneyArr[i] = Math.floor(money / moneyArr[i]);
    money = count;
  }

  return answer;
}

module.exports = problem5;
