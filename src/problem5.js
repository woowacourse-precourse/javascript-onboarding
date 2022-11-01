function problem5(money) {
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  let answerArr = []
  let change = money;

  for (let i = 0; i < moneyUnit.length; i++) {
    answerArr[i] = parseInt(change/moneyUnit[i]);
    change = change % moneyUnit[i];
  }

  var answer = answerArr;
  return answer;
}

module.exports = problem5;
