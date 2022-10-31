const MONEY_TYPE_ARR = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = Array.from({ length: MONEY_TYPE_ARR.length }, () => 0);
  let remainMoney = money;
  MONEY_TYPE_ARR.map((referenceMoney, i) => {
    answer[i] = Math.floor(remainMoney / referenceMoney);
    remainMoney = remainMoney % referenceMoney;
  });
  return answer;
}

module.exports = problem5;
