function problem5(money) {
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let curMoney = money;
  let idx = 0;
  let ans = new Array(moneyType.length).fill(0);

  while (curMoney && idx < moneyType.length) {
    ans[idx] = parseInt(curMoney / moneyType[idx]);
    curMoney = curMoney % moneyType[idx++];
  }

  return ans;
}

module.exports = problem5;
