const MONEY_TYPE_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const answer = Array.from({ length: MONEY_TYPE_LIST.length }, () => 0);
  let remainMoney = money;
  MONEY_TYPE_LIST.map((referenceMoney, i) => {
    answer[i] = Math.floor(remainMoney / referenceMoney);
    remainMoney %= referenceMoney;
  });
  return answer;
}

module.exports = problem5;
