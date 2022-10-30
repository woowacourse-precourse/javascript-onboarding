function problem5(money) {
  let answer = [];
  var moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < moneyArr.length; i++) {
    if (parseInt(money / moneyArr[i])) {
      answer.push(parseInt(money / moneyArr[i]));
    } else {
      answer.push(0);
    }
    money %= moneyArr[i];
  }
  return answer;
}

module.exports = problem5;
