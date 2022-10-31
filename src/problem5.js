function problem5(money) {
  function divideMoney(m) {
    const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const lenMoneyType = moneyType.length;
    let cntMoneyType = Array.from({ length: lenMoneyType }).fill(0);
    let restMoney = m;
    let [nextRest, idx] = [0, 0];
    while (idx < lenMoneyType) {
      const cnt = parseInt(restMoney / moneyType[idx]);
      cntMoneyType[idx] = cnt;
      nextRest = restMoney % moneyType[idx];
      if (nextRest === 0) break;
      restMoney = nextRest;
      idx += 1;
    }
    return cntMoneyType;
  }

  let answer = divideMoney(money);
  return answer;
}
module.exports = problem5;
