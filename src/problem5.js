function problem5(money) {
  let remainMoney = money;
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let i;

  for (i = 0; i < moneyArr.length; i++) {
    answer[i] = Math.floor(remainMoney / moneyArr[i]);
    remainMoney = remainMoney % moneyArr[i];
  }

  return answer;
}

module.exports = problem5;
