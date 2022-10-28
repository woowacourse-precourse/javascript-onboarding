function problem5(money) {
  let answer = [];
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  convertMoney(money, answer);
  return answer;
}

function convertMoney(cur, answer) {
  moneyList.forEach((money) => {
    answer.push(Math.floor(cur / money));
    cur %= money;
  });
  return answer;
}

module.exports = problem5;
