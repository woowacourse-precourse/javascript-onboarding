function problem5(money) {
  chageMoney(money);
  return answer;
}

module.exports = problem5;

const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
var answer = [];

function chageMoney(money) {
  for (var i = 0; i < moneyArr.length; i++) {
    let resultNum = Math.floor(money / moneyArr[i]);

    if (resultNum !== 0) {
      answer.push(resultNum);
      money -= moneyArr[i] * resultNum;
    } else {
      answer.push(0);
    }
  }
}
