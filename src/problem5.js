function problem5(money) {
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let remain = money;

  for (let index = 0; index < moneyType.length; index++) {
    answer[index] = parseInt(remain / moneyType[index]);
    remain = remain % moneyType[index];
  }

  return answer;
}

module.exports = problem5;
