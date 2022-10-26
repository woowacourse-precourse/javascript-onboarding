function problem5(money) {
  var answer = [];
  let unitMoneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let idx = 0;

  while (idx <= 8) {
    let result = 0;

    if (money >= unitMoneyArr[idx]) {
      result = Math.floor(money / unitMoneyArr[idx]);
    }

    money -= result * unitMoneyArr[idx];
    idx++;
    answer.push(result);
  }

  return answer;
}

module.exports = problem5;
