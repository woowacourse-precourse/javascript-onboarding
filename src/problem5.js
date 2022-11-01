function problem5(money) {
  const answer = [];

  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < moneyArr.length; i++) {
    answer.push(parseInt(money / moneyArr[i]));
    money = money % moneyArr[i];
  }

  return answer;
}

module.exports = problem5;
